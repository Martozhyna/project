import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {MoviesList} from "../MoviesList/MoviesList";
import {Genre} from "../Genre/Genre";

const Search = () => {

    const {movies,query} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useSearchParams({query:''});
    const {register,handleSubmit,reset} = useForm()

useEffect(() => {
    if (keyword){
        dispatch(movieAction.searchMovie({query:keyword.get('query')}))
    }

},[dispatch,keyword,movies])

    // const click = async (e) => {
    //   await setKeyword((value => ({query: +value.get('query')})));
    //     dispatch(movieAction.searchMovie(e))
    //     setKeyword(e.target.value);
    //
    //     reset();
    // };

    const clear = (e) => {

            setKeyword((value => ({query: +value.get('query')})));
            dispatch(movieAction.searchMovie(query))


        reset();
    }
    return (
        <form onSubmit={handleSubmit(clear)}>
            <input type="text" placeholder={'search'} {...register('search')}
                // onChange={(e) => setKeyword(e.target.value)}
            />
            <button>click</button>
            {
                console.log()
            }

            {
                query ? query.map(movie => <Genre key={movie.id} movie={movie}/>) : <div>nonono</div>
            }
        </form>
    );
}
export {Search}