import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {GenreList} from "../GenreList/GenreList";
import {useSearchParams} from "react-router-dom";

const GenresList = () => {

    const {movieGenres,moviesByGenre,with_genres,currentGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({with_genres:null});

    useEffect(() => {
        dispatch(movieAction.getGenres());
    }, [dispatch]);

    useEffect(() => {
        if (query)
        dispatch(movieAction.getMovieByGenre({with_genres:query.get('with_genres')}))
    }, [dispatch,query]);



     const handleSubmit  = (id) => {

        if (currentGenres.id) {

            dispatch(movieAction.deleteGenre(id))
            // setQuery();
            // setQuery(e.target.value);

        } else {
            // setQuery((value => ({with_genres: +value.get('with_genres') + id})))
           dispatch(movieAction.selectGenre(id));
            setQuery((value => ({with_genres:  id})))


        }
    }

    return (
        <div>
            {
                movieGenres.map(genre => <div key={genre.id}>
                    <button onClick={() => handleSubmit(genre.id)}>{genre.name}</button>

                </div>)

            }
            {
                query?moviesByGenre.map(value => value.title):<div>nnjn</div>
            }

            {/*{*/}
            {/*    moviesByGenre?.map(value => value.title)*/}
            {/*}*/}
            {

            }
        </div>
    );
}
export {GenresList}