import * as React from 'react';

import { IPromiseMethod } from 'helpers/awaitify';

export interface IWeatherContainerProps {

    fetchWeather: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    weatherData: any;

    children: (injectedProps: any) => React.ReactNode;
}
