import React, { 
    createContext, 
    useContext, 
    useState,
    useCallback
} from 'react'

import * as Location from 'expo-location'

import api from '../../services/api'
import { Alert, Platform } from 'react-native'
import { 
    LocationContextData, 
    LocationProviderProps,
    ICoords,
} from './location.type'

export const LocationContext = createContext({} as LocationContextData)

export const LocationProvider = ({ children }: LocationProviderProps) => {
    const [weatherData, setWeatherData] = useState()

    const getLocationPermission = async () => {
        try{
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                return Alert.alert(
                    'Permissão negada', 'É necessário dar permissão de acesso a localização para continuarmos'
                )
            }
        }catch(err: any) {
            throw new Error(err)
        }
    }

    const getCurrentLocation = async(): Promise<ICoords> => {
        let location = {
            coords: {
                latitude: -23.5626469,
                longitude: -46.624048,
            }
        }

        if(Platform.OS === "ios") {
            location = await Location.getCurrentPositionAsync({})
            Location.watchPositionAsync.bind(null, {})
        }

        return location.coords
    }

    const getWeatherData = useCallback(async () => {
        try {
            const { latitude, longitude } = await getCurrentLocation();
            
            const resp = await api
            .get(`data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=0f1d69fc1708dc1de4f7c632d17b945b`)
    
            setWeatherData(resp.data)
        } catch(error) {
            throw new Error('Erro ao buscar informações')
        }
    }, [])

    return (
        <LocationContext.Provider 
            value={{
                getLocationPermission, 
                getCurrentLocation, 
                getWeatherData, 
                weatherData
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => {
    const context = useContext(LocationContext)

    return context
}
