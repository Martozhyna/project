//базова урла + ендпоінти
const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movie: `/discover/movie`,
    detailMovie: '/movie',
    genre: '/genre/movie/list',
    searchMovie: '/search/movie'
};

export {
    baseURL,
    urls
};