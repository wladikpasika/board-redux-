import { fork, } from 'redux-saga/effects';

import { indexedDB } from './indexedDB';

export function* sagas() {
    yield fork(indexedDB);
}