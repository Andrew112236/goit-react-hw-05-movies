import axios from 'axios';
const API_KEY = '6761a75cfe3ce8a6cf2b591c7da9567e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// API function for searching movies

export async function searchMovies(query) {
  try {
    const API_URL = `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('There is a error in search movies of', error);
    throw error;
  }
}

// API function for movie details

export async function getMovieDetails(id) {
  try {
    const API_URL = `movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('There is a error in search movies details of', error);
    throw error;
  }
}

// API function for movie trendings

export async function getTrending() {
  try {
    const API_URL = `trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('There is a error in searching trendings of', error);
    throw error;
  }
}

// API function for movie reviews

export async function getReviews(id) {
  try {
    const API_URL = `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('There is a error in searching reviews of', error);
    throw error;
  }
}

// API function for movie credits

export async function getMovieCredits(id) {
  try {
    const API_URL = `movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('There is a error in searching reviews of', error);
    throw error;
  }
}