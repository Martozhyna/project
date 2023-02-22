import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';


const MoviesList = () => {
    //як компонента юзерс (рендерить всіх юзерів)
    const {movies,page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(() => {
        dispatch(movieAction.getAll({page:query.get('page')}))
    }, [dispatch,query]);


    const prev = () => {
        setQuery((value => ({page: +value.get('page') - 1})));
    };

    const next = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    return (
        <>
            <div className={css.buttons}>
                <button className={css.btn} disabled={!page} onClick={prev}>prev</button>
                <button className={css.btn} disabled={!page} onClick={next}>next</button>

            </div>

            <div className={css.movies}>

                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)

                }

            </div>


        </>
    );
}
export {MoviesList}