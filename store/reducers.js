import { combineReducers } from 'redux';

import posts from './modules/posts/reducer';
import users from './modules/users/reducer'

const reducers = {
    posts,
    users,
};

export default combineReducers(reducers);