import { all, takeEvery, AllEffect } from 'redux-saga/effects';

import { WeatherActionType } from 'actions/weatherActions';
import { fetchWeather } from './weatherSagas';

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(WeatherActionType.WEATHER_FETCH, fetchWeather),
    ]);
}
