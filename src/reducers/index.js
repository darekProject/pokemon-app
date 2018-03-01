import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({
    form,
    poke: pokeReducer
});

export default rootReducer;