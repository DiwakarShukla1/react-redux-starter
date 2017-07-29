import {todoReducer} from './todoReducer';
import {loginReducer} from './loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todos : todoReducer,
    login : loginReducer
});

export default rootReducer;