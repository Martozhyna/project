import {Link} from "react-router-dom";

import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {posterPreview} from "../PosterPreview/PosterPreview";

const MoviesListCard = ({movie}) => {
    //наступна сторінка, де відображається вся інформація про фільм
    const {title, poster_path, id, release_date, genres, vote_average} = movie;

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
                    <div className={css.linkDiv}>
                        <Link to={`/movie/${id}`} className={css.link}>Learn more</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};
export {MoviesListCard};