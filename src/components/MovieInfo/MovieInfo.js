import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {movieAction} from "../../redux";
import css from './MovieInfo.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {useTheme} from "../../hook/useTheme";

const MovieInfo = () => {
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {id} = useParams();
    const {theme, setTheme} = useTheme();

    useEffect(() =>{
        if (id){
            dispatch(movieAction.getDetails(id))
        }
    },[dispatch,id])

    return (
        <div>
            {
                movie ?
                    <div className={css.main}>
                        <div className={css.border}>
                            <div className={css.center}>
                                <div className={css.left}>
                                    <div className={css.genres}>
                                        {
                                            movie.genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                                        }
                                    </div>
                                    <h2>{movie.title}</h2>
                                    <img className={css.img} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                                         alt=""/>
                                </div>
                            </div>

                        </div>

                        <div className={css.line}>

                        </div>
                        <div className={css.right}>
                            <div className={css.overview}>
                                <h3>Overview</h3>
                                <p>{movie.overview}</p>
                            </div>
                            <div className={css.info}>
                                <div>
                                    <p><b>Adult:</b> {movie.adult.toString()}</p>
                                    <p><b>Release date:</b> {movie.release_date}</p>
                                    <p><b>Movie rating:</b> {movie.vote_average}</p>
                                </div>
                                <div>
                                    <p><b>Budget:</b> {movie.budget}</p>
                                    <p><b>Original language:</b> {movie.original_language}</p>
                                    <p><b>Tagline:</b> {movie.tagline}</p>
                                </div>
                            </div>
                            <div className={css.frame}>
                                <h4>Frame from the movie</h4>
                                <img className={css.img} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
                                     alt=""/>
                            </div>
                        </div>

                    </div>
                    : <div>no </div>
            }
        </div>
    );
}
export {MovieInfo}