import { call, put, Effect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { client } from 'httpClient/client';
import * as WeatherActions from 'actions/weatherActions';
import { IWeatherRequestAction } from 'actions/weatherActions';

export function* fetchWeather(action: IWeatherRequestAction): IterableIterator<Effect> {
    try {
        let response: AxiosResponse<{data: any}> = yield call(() => client.get('/', {
            params: {
                q: 'London,us'
            }
        }));

        if (response) {
            action.promise.resolve();
            return yield put(WeatherActions.actionWeatherFetchComplete(response.data));
        } else {
            action.promise.reject();
            return yield put(WeatherActions.actionWeatherError());
        }
    } catch (e) {
        action.promise.reject();
        return yield put(WeatherActions.actionWeatherError());
    }
}
