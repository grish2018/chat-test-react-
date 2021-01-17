import * as types from './types';
import { all, fork, put, takeLatest } from 'redux-saga/effects'

function* getUsers() {
    try {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        yield put({
            type: types.GET_USERS_SUCCESS,
            payload: yield res.json(),
        });
    } catch (e) {
        yield put({
            type: types.GET_USERS_FAILURE,
            payload: {},
        });
    }
}

function* getCurrentUser({ payload }) {
    try {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/users/${payload}`);
        yield put({
            type: types.GET_CURRENT_USER_SUCCESS,
            payload: yield res.json(),
        });
    } catch (e) {
        yield put({
            type: types.GET_CURRENT_USER_FAILURE,
            payload: {},
        });
    }
}

function* watchGetUsers() {
    yield takeLatest(types.GET_USERS_REQUEST, getUsers)
}
function* watchGetCurrentUsers() {
    yield takeLatest(types.GET_CURRENT_USER_REQUEST, getCurrentUser)
}

export default function* users() {
    yield all([
        fork(watchGetUsers),
        fork(watchGetCurrentUsers)
    ])
}