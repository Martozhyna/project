//таке саме як юзер сервіс
import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovie: (page=1) => apiService.get(urls.movie,{params: {page}})
};

export {
    movieService
};