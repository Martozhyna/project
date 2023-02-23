//таке саме як юзер сервіс
import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovie: (page = 1) => apiService.get(urls.movie,{params: {page}}),
    getDetailsMovie: (id) => apiService.get(`${urls.detailMovie}/${id}`),
    getGenres: () => apiService.get(urls.genre),
    searchMovie: (movie) => apiService.get(`${urls.searchMovie}?query=${movie}`)

};

export {
    movieService
};