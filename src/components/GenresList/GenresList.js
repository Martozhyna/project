import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../redux";
import css from './GenresList.module.css';


const GenresList = () => {

    const {movieGenres, with_genres, currentGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({with_genres: null});

    useEffect(() => {
        dispatch(movieAction.getGenres());
    }, [dispatch]);

    useEffect(() => {
        if (query)
            dispatch(movieAction.getMovieByGenre({with_genres: query.get('with_genres'), currentGenres}))
    }, [dispatch, query, currentGenres]);

    const handleSubmit = (id) => {

        if (currentGenres.length) {
            setQuery((value => ({with_genres: +value.get('with_genres')})))
            dispatch(movieAction.deleteGenre(id))
            setQuery((value => ({with_genres: id})));
        } else {
            setQuery((value => ({with_genres: +value.get('with_genres')})))
            dispatch(movieAction.selectGenre(id));
            setQuery((value => ({with_genres: id})))
        }

    };

    return (
        <div className={css.genres}>
            {
                movieGenres.map(genre => <div className={css.genre} key={genre.id}>
                    <button className={css.btn} onClick={() => handleSubmit(genre.id)}>{genre.name}</button>
                </div>)

            }
        </div>
    );
};
export {GenresList};