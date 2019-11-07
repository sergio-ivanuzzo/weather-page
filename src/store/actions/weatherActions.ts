import { AnyAction } from 'redux';

import { IPromiseMethod } from 'helpers/awaitify';

export enum WeatherActionType {
    WEATHER_FETCH = 'WEATHER_FETCH',
    WEATHER_FETCH_COMPLETE = 'WEATHER_FETCH_COMPLETE',
    WEATHER_ERROR = 'WEATHER_ERROR',
}

export interface IWeatherAction {
    readonly Request: {
        type: string;
        payload: any;
        promise: {
            resolve: IPromiseMethod;
            reject: IPromiseMethod;
        }
    }

    readonly Response: {
        payload: any;
    }
}

export interface IWeatherRequestAction extends AnyAction {
    payload: any;
    promise: {
        resolve: IPromiseMethod;
        reject: IPromiseMethod;
    }
}

export interface IWeatherResponseAction extends AnyAction {
    payload: any;
}

export function actionWeatherFetch(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IWeatherRequestAction>{
        payload,
        type: WeatherActionType.WEATHER_FETCH,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionWeatherFetchComplete(payload: any): AnyAction {
    return <IWeatherResponseAction>{
        payload,
        type: WeatherActionType.WEATHER_FETCH_COMPLETE
    }
}

export function actionWeatherError() {
    return {
        type: WeatherActionType.WEATHER_ERROR
    }
}
