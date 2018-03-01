import {FETCH_ERROR, FETCH_POKE} from "../actions/type";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POKE:
            return {
                ...state,
                pokemons: action.payload
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