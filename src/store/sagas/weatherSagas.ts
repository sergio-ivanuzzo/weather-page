import { call, put, Effect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { client } from 'httpClient/client';
import * as WeatherActions from 'actions/weatherActions';
import { IWeatherRequestAction } from 'actions/weatherActions';

export function* fetchWeather(action: IWeatherRequestAction): IterableIterator<Effect> {
    try {
        let response: AxiosResponse<{data: any}> = yield call(() => client.get('/', {
            params: {
                ...action.payload
            }
        }));

        if (response) {
            toast.success('Weather data successfully received!');
            action.promise.resolve();
            return yield put(WeatherActions.actionWeatherFetchComplete(response.data));
        } else {
            action.promise.reject();
            return yield put(WeatherActions.actionWeatherError());
        }
    } catch (e) {
        toast.error(e.toString());
        action.promise.reject();
        return yield put(WeatherActions.actionWeatherError(e));
    }
}
