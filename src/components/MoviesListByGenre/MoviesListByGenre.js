import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieAction} from "../../redux";

const MoviesListByGenre = () => {

    const {moviesByGenre,with_genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({with_genres:null});

    useEffect(() => {
        dispatch(movieAction.getMovieByGenre({with_genres:query.get('with_genres')}))
    }, [dispatch,query]);


    return (
        <div>

        </div>
    )
}
export {MoviesListByGenre}