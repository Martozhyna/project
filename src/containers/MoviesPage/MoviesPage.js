import {Header, MoviesList, SearchMovies} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <SearchMovies/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};