import { all } from 'redux-saga/effects';

import postsSaga from './modules/posts/sagas';
import usersSaga from './modules/users/sagas'

export default function* rootSaga() {
    yield all([postsSaga(), usersSaga()]);
}