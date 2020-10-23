import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    people: peopleReducer
});
