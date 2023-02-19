import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    //як компонента юзерс (рендерить всіх юзерів)
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getAll())
    }, [dispatch]);
    return (
        <div>


            {
                 movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)

            }


        </div>
    );
}
export {MoviesList}