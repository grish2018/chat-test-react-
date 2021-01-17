import * as types from './types';

export const getUsers = (payload) => ({
    type: types.GET_USERS_REQUEST,
    payload,
});
export const getCurrentUser = (payload) => ({
    type: types.GET_CURRENT_USER_REQUEST,
    payload,
});