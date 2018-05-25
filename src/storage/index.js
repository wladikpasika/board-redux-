import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import { sagas } from './sagas';

const sagaMidleware = sagaMiddlewareFactory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMidleware)));

sagaMidleware.run(sagas);