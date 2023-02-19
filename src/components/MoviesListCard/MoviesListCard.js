const MoviesListCard = ({movie}) => {
    //наступна сторінка, де відображається вся інформація про фільм
    const {original_title} = movie
    return (
        <div>
            <h2>{original_title}</h2>
        </div>
    )
}
export {MoviesListCard}