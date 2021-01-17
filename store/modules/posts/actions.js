import * as types from './types';

export const getPosts = (payload) => ({
    type: types.GET_POSTS_REQUEST,
    payload,
});
export const getUserPosts = (payload) => ({
    type: types.GET_USER_POSTS_REQUEST,
    payload,
});
export const getPostComments = (payload) => ({
    type: types.GET_POST_COMMENTS_REQUEST,
    payload,
});