import axios from "axios";
import { apiKey } from "../constans";

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null



const apiCall = async (eendpoint, params) => {
    const options = {
        method: 'GET',
        url: eendpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error);
        return {}
    }
}

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint)
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint)
}
export const fetchtopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint)
}