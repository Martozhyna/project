import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../redux";
import css from './GenresList.module.css';


const GenresList = () => {

    const {movieGenres, currentGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({with_genres: null});
    const [page, setPage] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieAction.getGenres());
    }, [dispatch]);

    useEffect(() => {
        if (query)
            dispatch(movieAction.getMovieByGenre({with_genres: query.get('with_genres'), currentGenres,page:page.get('page')}))
    }, [dispatch, query, currentGenres,page]);

    const handleSubmit = (id) => {

        if (currentGenres.length) {
            setQuery((value => ({with_genres: +value.get('with_genres')})))
            setPage((value => ({page: value.get('page')})))
            dispatch(movieAction.updateGenre(id))
            setQuery((value => ({with_genres: id})));
        } else {
            setQuery((value => ({with_genres: +value.get('with_genres')})))
            setPage((value => ({page: value.get('page')})))
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