import {Link} from "react-router-dom";

import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    //наступна сторінка, де відображається вся інформація про фільм
    const {title,poster_path,id,release_date} = movie

    return (
        <div className={css.movieBg}>
            <div className={css.center}>
                <div className={css.movie}>
                    <h2>{title}</h2>
                    <h3>{release_date.slice(0,4)}</h3>
                    <img src={'https://image.tmdb.org/t/p/w300/' + poster_path} alt={title}/>
                    <div>

                    </div>
                    <div className={css.linkDiv}>
                        <Link to={`/movie/${id}`} className={css.link}>Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {MoviesListCard}