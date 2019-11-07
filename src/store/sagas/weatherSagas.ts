import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { client } from 'httpClient/client';
import * as WeatherActions from 'actions/weatherActions';
import { IWeatherAction } from 'actions/weatherActions';

export function* fetchWeather(params: IWeatherAction['Request']): IterableIterator<any> {
    console.log(params);
    try {
        let response: AxiosResponse<{data: any}> = yield call(() => client.get('/', {
            params: {
                q: 'London,us'
            }
        }));

        if (response) {
            params.resolve();
            return yield put(WeatherActions.actionWeatherFetchComplete(response.data));
        } else {
            params.reject();
            return yield put(WeatherActions.actionWeatherError());
        }
    } catch (e) {
        params.reject();
        return yield put(WeatherActions.actionWeatherError());
    }
}
