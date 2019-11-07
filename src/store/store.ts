import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
