//таке саме як юзер сервіс
import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovie: () => apiService.get(urls.movie)
};

export {
    movieService
};