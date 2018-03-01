import {FETCH_ALL_POKE, FETCH_ERROR, FETCH_POKE} from "../actions/type";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POKE:
            return {
                ...state,
                pokemons: [action.payload]
            };
        case FETCH_ALL_POKE:
            console.log(state);
            return {
                ...state,
                pokemons: state.pokemons ? state.pokemons.concat(action.payload) : [action.payload]
            };
        case FETCH_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
}