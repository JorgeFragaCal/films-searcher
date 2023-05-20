const BASE_URL = 'https://api.themoviedb.org/3/'
export const API_KEY: string = import.meta.env.VITE_APP_API_KEY
export const baseUrl = 'https://image.tmdb.org/t/p/'
export const sizeImg = 'w185'
export const popularFilmsUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}`
export const searchUrl = (search: string) =>
  `${BASE_URL}search/movie?query=${search}&api_key=${API_KEY}`
