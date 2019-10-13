import {combineReducers} from 'redux';
import postreducer from './postreducer';

const blogreducer = (state = {}, action) => {
    
}

export default combineReducers({
    posts: postreducer
})