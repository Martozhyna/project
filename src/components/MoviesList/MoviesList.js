import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";

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
}

const next = () => {
    // if (query > 500)
    setQuery(value => ({page: +value.get('page') + 1}))
}

    return (
        <div>
            <div>
                <button disabled={!page} onClick={prev}>prev</button>
                <button disabled={!page} onClick={next}>next</button>

            </div>

<div>

    {
        movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)

    }

</div>



        </div>
    );
}
export {MoviesList}