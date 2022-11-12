import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const makeTrendingMoviesApiRequest = async signal => {
  const response = await axios.get(
    `trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    { signal: signal }
  );
  return await response.data.results;
};

export const makeMovieApiReguest = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return await response.data;
};

export const makeCastApiReguest = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return await response.data.cast;
};

export const makeReviewApiReguest = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const makeMovieSearchApiReguest = async value => {
  const response = await axios.get(
    `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${value}`
  );
  return response.data.results;
};
