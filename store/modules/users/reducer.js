import * as types from './types';

const initialState = {
    users: [],
    currentUser: {},
    isUsersFetching: false,
    isCurrentUser: false
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_REQUEST:
            return {
                ...state,
                isUsersFetching: true,
            };
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isUsersFetching: false,
            };
        case types.GET_USERS_FAILURE:
            return {
                ...state,
                isUsersFetching: false,
            };
        case types.GET_CURRENT_USER_REQUEST:
            return {
                ...state,
                isCurrentUser: true,
            };
        case types.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isCurrentUser: false,
            };
        case types.GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                isCurrentUser: false,
            };
        default:
            return state;
    }
}