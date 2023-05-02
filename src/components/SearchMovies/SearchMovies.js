import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './SearchMovies.module.css';


const SearchMovies = () => {
    const {searched} = useSelector(state => state.movies);
    const [params, setParams] = useSearchParams({query: ''});
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();
    const [query, setQuery] = useSearchParams({page: '1'});



    useEffect(() => {
        if (params.has('query').lenght) {
            dispatch(movieAction.searchMovie({query: params.get('query'),page: query.get('page') }))
        }
    }, [dispatch, params, query]);


    const showMovie = async (e) => {

        if (params.has('query')) {
            setParams((value => ({query: +value.get('query')})));
            await dispatch(movieAction.searchMovie(e))
            setParams(e)


        }
        // setParams('');
    };

    const prev = () => {
        setQuery((value => ({page: +value.get('page') - 1})));
    };

    const next = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };


    return (
        <div>

            <form className={css.form} onSubmit={handleSubmit(showMovie)}>
                <input className={css.search} type="text" placeholder={'Search movie...'}
                       {...register('query')}
                />
                <button className={css.btn}>search</button>

            </form>
            <button className={css.btn} disabled={+query.get('page') < 2} onClick={prev}>prev</button>
            <button className={css.btn} onClick={next}>next</button>

            <div className={css.movies}>
                {
                    searched.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>

    );
};

export {SearchMovies};