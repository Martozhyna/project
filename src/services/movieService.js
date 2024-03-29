import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovie: (page = 1) => apiService.get(urls.movie,{params: {page}}),
    getDetailsMovie: (id) => apiService.get(`${urls.detailMovie}/${id}`),
    getGenres: () => apiService.get(urls.genre),
    getMovieByGenre: (with_genres,page = 1) => apiService.get(urls.genreSearch,{params:{with_genres,page}}),
    searchMovie: (query = '', page = 1) => apiService.get(urls.searchMovie,{params:{query, page}})
};

export {
    movieService
};