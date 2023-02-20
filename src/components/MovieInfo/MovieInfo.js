import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {movieAction} from "../../redux";

const MovieInfo = () => {
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() =>{
        if (id){
            dispatch(movieAction.getDetails(id))
        }
    },[dispatch,id])

    return (
        <div>
            {
                movie ? <div>{movie.title}</div> : <div>no </div>
            }
        </div>
    )
}
export {MovieInfo}