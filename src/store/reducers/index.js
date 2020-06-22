import { combineReducers } from 'redux';

import userReducer from './user.js';

export default combineReducers({
    user: userReducer
})