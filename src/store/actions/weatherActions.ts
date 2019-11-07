import { AnyAction } from 'redux';

export enum WeatherActionType {
    WEATHER_FETCH = 'WEATHER_FETCH',
    WEATHER_FETCH_COMPLETE = 'WEATHER_FETCH_COMPLETE',
    WEATHER_ERROR = 'WEATHER_ERROR',
}

export interface IWeatherAction {
    readonly Request: {
        payload: any;
        resolve: (value?: any) => void;
        reject: (value?: any) => void;
    }

    readonly Response: {
        payload: any;
    }
}

export function actionWeatherFetch(
    payload: any,
    resolve: (value?: any) => void,
    reject: (value?: any) => void
): AnyAction {
    return {
        payload,
        type: WeatherActionType.WEATHER_FETCH,
        resolve,
        reject
    }
}

export function actionWeatherFetchComplete(payload: any): AnyAction {
    return {
        payload,
        type: WeatherActionType.WEATHER_FETCH_COMPLETE
    }
}

export function actionWeatherError() {
    return {
        type: WeatherActionType.WEATHER_ERROR
    }
}
