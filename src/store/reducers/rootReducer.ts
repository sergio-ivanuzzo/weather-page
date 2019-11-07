import { combineReducers } from 'redux';

import {IWeatherReducerState, weatherReducer} from './weatherReducer';

export interface IStoreState {
    weatherReducer: IWeatherReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    weatherReducer
});
