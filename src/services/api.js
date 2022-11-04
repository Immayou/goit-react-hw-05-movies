import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/'

export const makeTrendingMoviesApiRequest = async () => {
    const response = await axios.get(`3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    return await response.data.results
}

export const makeMovieApiReguest = async (id) => {
    const response = await axios.get(`3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    return await response.data
}
