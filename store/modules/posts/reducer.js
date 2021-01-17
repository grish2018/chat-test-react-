import * as types from './types';

const initialState = {
    posts: [],
    isFetching: false,
    isCommentsFetching: false
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.GET_POSTS_SUCCESS:
            const last20Posts = action.payload.slice(-21)
            console.log(last20Posts);
            return {
                ...state,
                posts: last20Posts,
                isFetching: false,
            };
        case types.GET_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        case types.GET_USER_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isFetching: false,
            };
        case types.GET_USER_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        case types.GET_POST_COMMENTS_REQUEST:
            return {
                ...state,
                isCommentsFetching: true,
            };
        case types.GET_POST_COMMENTS_SUCCESS:
            const { postId, comments } = action.payload;
            const posts = state.posts.map(post => post.id === postId ? { ...post, comments } : post)
            return {
                ...state,
                posts,
                isCommentsFetching: false,
            };
        case types.GET_POST_COMMENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                isCommentsFetching: false
            };
        default:
            return state;
    }
}