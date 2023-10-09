import axios from 'axios'

export const api_key='34f3990343ebebb718c7f4fd63a70926';

export const api=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})