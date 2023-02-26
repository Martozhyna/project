import {Header, MoviesList, SearchMovies} from "../../components";

const MoviesPage = () => {
    //сторінка, яка рендериться при запуску сайту, має в собі містити хедер + муві ліст
    return (
        <div>
            <Header/>
            <SearchMovies/>
            <MoviesList/>
        </div>
    );
};
export {MoviesPage};