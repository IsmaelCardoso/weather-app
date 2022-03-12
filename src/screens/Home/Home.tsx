import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Platform, ScrollView } from 'react-native'

import { useLocation } from '../../hooks/location'

import Card from '../../components/Card'
import Button from '../../components/Button'

import convertKelvinToCelsius from '../../utils/converter'
import getDayPeriod from '../../utils/getDayPeriod'

import { useTheme } from 'styled-components'

import {
    Container, 
    Content,
    Neighborhood, 
    Temperature,
    ClimateImageContainer,
    Climate,
    TemperatureRange,
    CardContainer,
    Footer,
    ClimateImage,
} from './Home.styles';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const [dayPeriod, setDayPeriod] = useState<'day' | 'afternoon' | 'night'>('day')
    
    const {
        getLocationPermission,
        getWeatherData,
        weatherData
    } = useLocation()

    const theme = useTheme();

    const handlePressUpdateData = async() => {
        setIsLoadingUpdate(true)

        try{
            await getWeatherData()
        }catch(err: any) {
            Alert.alert('Ops!', `Houve um problema ao carregar as informações, tente novamente!`)
        }

        setIsLoadingUpdate(false)
    }

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true)
            Platform.OS === 'ios' && await getLocationPermission();

            await getWeatherData();
            setIsLoading(true)

            const hour = new Date().getHours()
            const dayPeriod = getDayPeriod(hour)
            setDayPeriod(dayPeriod)
            setIsLoading(false)
        }

        fetchData();
    }, []);

    if(isLoading || isLoadingUpdate) {
        return (
            <Container 
                period={dayPeriod} 
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center' 
                }}
            >
                <ActivityIndicator size="large" color={theme.colors.white} />
            </Container>
        )
    }

    return (
        <Container period={dayPeriod}>
            <ScrollView>
                <Content>
                    <Neighborhood>{weatherData?.name}</Neighborhood>
                    <Temperature>
                        {`${convertKelvinToCelsius(weatherData?.main?.temp || 0)}°`}
                    </Temperature>
                    <ClimateImageContainer>
                        <ClimateImage  
                            source={{ 
                                uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png` 
                            }}
                            resizeMode='contain'
                        />
                    </ClimateImageContainer>
                    <Climate>
                        {
                            weatherData?.weather[0].description || 
                            "Infomrção indisponivel"
                        }
                    </Climate>
                    <TemperatureRange>
                        {
                        `Máx.:${convertKelvinToCelsius(weatherData?.main?.temp_max || 0)}°` + 
                        `   ` +
                        `Mín.:${convertKelvinToCelsius(weatherData?.main?.temp_min || 0)}°`
                        }
                    </TemperatureRange>
                </Content>
                {weatherData &&
                    <CardContainer>
                        <Card 
                            humidity={weatherData?.main?.humidity.toString() || '-'} 
                            pressure={weatherData?.main?.pressure.toString() || '-'} 
                            windSpeed={weatherData?.wind?.speed.toString() || '-'}
                        />
                    </CardContainer>
                }

                <Footer>
                    <Button 
                        title="Atualizar informações"
                        color={
                            dayPeriod === 'night' ? 
                            theme.colors.background_secondary_opacity : 
                            ''
                        }
                        textColor={
                            dayPeriod === 'night' ? 
                            theme.colors.text : 
                            ''
                        }
                        onPress={handlePressUpdateData}
                        loading={isLoadingUpdate}
                    />
                </Footer>
            </ScrollView>
        </Container>
    );
}

export default Home;