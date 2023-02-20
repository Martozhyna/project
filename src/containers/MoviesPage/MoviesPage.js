import {MoviesList} from "../../components";

const MoviesPage = () => {
    //сторінка, яка рендериться при запуску сайту, має в собі містити хедер + муві ліст
    return (
        <div>
            MoviesPage
            <MoviesList/>
        </div>
    )
}
export {MoviesPage}