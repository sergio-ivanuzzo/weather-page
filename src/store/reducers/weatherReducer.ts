import { AnyAction } from 'redux';

import { WeatherActionType } from 'actions/weatherActions';

export interface ICoordData {
    lat: number;
    lon: number;
}

export interface ICityData {
    coord: ICoordData;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}

export interface ICloudsData {
    all: number;
}

export interface IIndicatorsData {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

export interface IWeatherDescription {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IWindData {
    deg: number;
    speed: number;
}

export interface IRainData {
    '3h': number;
}

export interface ISnowData {
    '3h': number;
}

export interface IForecastData {
    clouds?: ICloudsData;
    dt: number;
    dt_txt: string;
    main: IIndicatorsData;
    weather: Array<IWeatherDescription>;
    wind?: IWindData;
    rain?: IRainData;
    snow?: ISnowData;
}

export interface IWeatherData {
    city: ICityData;
    cnt: number;
    cod: string;
    list: Array<IForecastData>;
    message: number;
}

export interface IWeatherReducerState {
    weatherData: IWeatherData;
}

export const initialState: IWeatherReducerState = {
    weatherData: undefined
};

export const weatherReducer = (state = initialState, action: AnyAction): IWeatherReducerState => {
    switch (action.type) {
        case WeatherActionType.WEATHER_FETCH_COMPLETE: {
            return {
                ...state,
                weatherData: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
