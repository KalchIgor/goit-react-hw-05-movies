import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY = "c01f14dcdb58e9cec669b1017a4d540c";

export const getTrendingMovies = async () => {
     try {
    const query = `trending/movie/day?api_key=${KEY}`;
    const { data: movies } = await axios.get(query);
         return movies;
     }
    catch (error) {
    return (error);
  }
};

export const searchMovies = async (searchParam) => {
     try {
    const query = `search/movie?api_key=${KEY}&page=1&query=${searchParam}`;
    const { data: movies } = await axios.get(query);
         return movies;
     }
    catch (error) {
    return (error);
  }
};

export const getMovieDetails = async (movieId) => {
     try {
    const query = `movie/${movieId}$?api_key=${KEY}`;
    const { data: movie } = await axios.get(query);
         return movie;
     }
    catch (error) {
    return (error);
  }
};


export const getMovieCast = async (movieId) => {
     try {
    const query = `movie/${movieId}/credits?api_key=${KEY}`;
    const { data } = await axios.get(query);
         return data;
     }
    catch (error) {
    return (error);
  }
};

export const getReviews = async (movieId) => {
     try {
    const query = `movie/${movieId}/reviews?api_key=${KEY}`;
    const { data } = await axios.get(query);
         return data;
     }
     catch (error) {
    return (error);
  }
};