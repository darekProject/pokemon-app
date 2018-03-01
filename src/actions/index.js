import axios from 'axios';
import {FETCH_POKE, FETCH_ERROR} from './type';

export const fetchPokemon = pokemon => async dispatch => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({type: FETCH_POKE, payload: data});
    } catch (err) {
        return dispatch(error(err));
    }
};

export const error = (err) => {
    return {type: FETCH_ERROR, payload: err}
};