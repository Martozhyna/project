import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
    //для зірок з бібліотеки, яку треба скачати
    return (
        <div>
            <StarRatings
                rating={rating}
                starRatedColor="orange"
                numberOfStars={10}
                name='rating'
                starDimension="35px"
                starSpacing="6px"
            />

        </div>
    )
}
export {StarsRating}