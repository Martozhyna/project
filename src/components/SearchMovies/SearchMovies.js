import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './Search.Movies.module.css';
import {findAllByDisplayValue} from "@testing-library/react";




const SearchMovies = () => {
    const {searched,query} = useSelector(state => state.movies);
    const [params, setParams] = useSearchParams({query:''});
    const dispatch = useDispatch();
    const {register} = useForm();

useEffect(() => {
    if (params) {
        dispatch(movieAction.searchMovie({query:params.get('query')}))
    }
},[dispatch,params])


    const showMovie = (e) => {

        if (query) {
            setParams((value => ({query: +value.get('query')})));
            dispatch(movieAction.searchMovie(e))
            setParams(e.target.value);
        }
        setParams('');


    };

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     if (e.target.value) {
    //         dispatch(movieAction.searchMovie({name:e.target.value}))
    //     } else {
    //
    //     }
    //
    // }
    return (
        <div>


            <form className={css.form}>
                <input className={css.search} type="text" placeholder={'Search movie...'}
                       {...register('query')}
                    // onChange={handleChange}
                       onChange={(e) => setParams(e.target.value)}
                />
                <button  className={css.btn} onClick={showMovie}>search</button>

            </form>



            <div className={css.movies}>


                {
                    searched.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)

                }



            </div>

        </div>

    );
}
export {SearchMovies}