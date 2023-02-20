const MoviesListCard = ({movie}) => {
    //наступна сторінка, де відображається вся інформація про фільм
    const {title,poster_path} = movie
    return (
        <div>
            <h2>{title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt={title}/>
        </div>
    )
}
export {MoviesListCard}