import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
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
    );
};

export {StarsRating};