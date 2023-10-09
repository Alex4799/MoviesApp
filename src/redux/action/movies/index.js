import { ActionType } from "../action-types"

export const fetchMovies=(movies)=>{
    return {
        type:ActionType.FETCH_MOVIES,
        payload:movies,
    };
}

export const selectMovies=(movie)=>{
    return {
        type:ActionType.SELECT_MOVIES,
        payload:movie,
    };
}

export const unselectMovies=(movie)=>{
    return {
        type:ActionType.SELECT_MOVIES,
        payload:movie,
    };
}