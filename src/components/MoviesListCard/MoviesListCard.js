import {Link} from "react-router-dom";

import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {posterPreview} from "../PosterPreview/PosterPreview";
import {useSelector} from "react-redux";


const MoviesListCard = ({movie}) => {
    const {title, poster_path, id, release_date, vote_average} = movie;
    const {movieGenres} = useSelector(state => state.movies);

    const genres = (id) => {
        const genre = movieGenres.find(genre => genre.id === id);
        return genre.name
    }

    return (
        <div className={css.movieBg}>

            <div className={css.center}>
                <div className={css.movie}>
                    <h2>{title}</h2>
                    <h3>{release_date.slice(0, 4)}</h3>
                    <img src={posterPreview + poster_path} alt={title}/>

                    <div>
                        <StarsRating rating={vote_average}/>

                    </div>
                    <div className={css.genres}>
                        {
                            movie.genre_ids.map(genre => <div className={css.genre} key={genre}>{genres(genre)}</div>)
                        }
                    </div>

                    <div className={css.linkDiv}>
                        <Link to={`/movie/${id}`} className={css.link}>Learn more</Link>
                    </div>

                </div>
            </div>

        </div>


    );
};

export {MoviesListCard};