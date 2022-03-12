import { ReactNode } from "react"

interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string,
}

interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface IWind {
    speed: number,
    deg: number
}

interface IClouds {
    all: number
}

export interface IWeatherData {
    weather: IWeather[],
    main: IMain,
    visibility: number,
    wind: IWind,
    clouds: IClouds,
    name: string,
    cod: number
}

export interface ICoords {
    latitude: number
    longitude: number
}

export type LocationContextData = {
    getLocationPermission: () => Promise<void>
    getCurrentLocation: () => Promise<ICoords>
    getWeatherData: () => Promise<any>
    weatherData: IWeatherData | undefined
}

export type LocationProviderProps = {
    children: ReactNode;
};