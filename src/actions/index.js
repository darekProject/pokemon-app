import axios from 'axios';
import {FETCH_POKE, FETCH_ERROR, FETCH_ALL_POKE} from './type';

export const fetchPokemon = pokemon => async dispatch => {
    try {
        const {data: {abilities, base_experience, height, name, sprites, types, weight}} = await axios.get(`https://pokeapi.co/api/v2/${pokemon}`);
        // const data = await axios.get(`https://pokeapi.co/api/v2/${pokemon}`);

        const payload = {
            abilities,
            base_experience,
            height,
            name,
            sprites,
            types,
            weight
        };
        console.log(payload);
        dispatch({type: FETCH_POKE, payload});
    } catch (err) {
        console.log(err);
        return dispatch(error(err));
    }
};

export const fetchAllPoke = (limit, offset) => async dispatch => {
    try {
        console.log('go gi');
        console.log(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
        const {data: {results}} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);

        console.log(results);

        await results.map(async poke => {
            const {data: {abilities, base_experience, height, name, sprites, types, weight}} = await axios.get(poke.url);

            const payload = {
                abilities,
                base_experience,
                height,
                name,
                sprites,
                types,
                weight
            };

            dispatch({type: FETCH_ALL_POKE, payload});
        });


    } catch (err) {
        console.log(err.error.date);
        return dispatch(error(err));
    }
};

export const error = (err) => {
    return {type: FETCH_ERROR, payload: err}
};