import axios from 'axios';

// const params = {
//   api_key: 'ec8ea0b4348914be2279bac7c8ca37c4',
// };
// let currentPage = 1;

export const fetchDayMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?`;
  const params = {
    api_key: 'ec8ea0b4348914be2279bac7c8ca37c4',
  };
  const response = await axios.get(url, { params });
  // console.log('response.data.hits', response.data);
  return response.data;
};
export const fetchMovies = async search => {
  console.log('search ', search);
  const url = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    api_key: 'ec8ea0b4348914be2279bac7c8ca37c4',
    query: search,
    page: 1,
  };
  const response = await axios.get(url, { params });
  // console.log('response.data.hits', response.data);
  return response.data;
};
