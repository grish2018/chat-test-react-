import * as types from './types';
import { all, fork, put, takeLatest } from 'redux-saga/effects'

function* getPosts() {
    try {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/posts`);
        yield put({
            type: types.GET_POSTS_SUCCESS,
            payload: yield res.json(),
        });
    } catch (e) {
        yield put({
            type: types.GET_POSTS_FAILURE,
            payload: {},
        });
    }
}
function* getUserPosts({ payload }) {
    try {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/posts?userId=${payload}`);
        yield put({
            type: types.GET_USER_POSTS_SUCCESS,
            payload: yield res.json(),
        });
    } catch (e) {
        yield put({
            type: types.GET_USER_POSTS_FAILURE,
            payload: {},
        });
    }
}
function* getPostComments({ payload }) {
    try {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`);
        yield put({
            type: types.GET_POST_COMMENTS_SUCCESS,
            payload: {
                postId: payload,
                comments: yield res.json(),
            }
        });
    } catch (e) {
        yield put({
            type: types.GET_POST_COMMENTS_FAILURE,
            payload: {},
        });
    }
}

function* watchGetPosts() {
    yield takeLatest(types.GET_POSTS_REQUEST, getPosts)
}
function* watchGetUserPosts() {
    yield takeLatest(types.GET_USER_POSTS_REQUEST, getUserPosts)
}
function* watchGetPostComments() {
    yield takeLatest(types.GET_POST_COMMENTS_REQUEST, getPostComments)
}

export default function* posts() {
    yield all([
        fork(watchGetPosts),
        fork(watchGetUserPosts),
        fork(watchGetPostComments)
    ])
}