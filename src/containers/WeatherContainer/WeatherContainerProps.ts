import * as React from 'react';

import { IPromiseMethod } from 'helpers/awaitify';
import { IWeatherData } from 'reducers/weatherReducer';

export interface IWeatherContainerProps {
    fetchWeather: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    weatherData: IWeatherData;
    children: (injectedProps: any) => React.ReactNode;
}

export interface IWeatherContainerChildProps {
    weatherData: IWeatherData;
    fetchWeather: (request) => Promise<void>;
}
