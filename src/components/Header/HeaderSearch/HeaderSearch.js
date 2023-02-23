// import {useForm} from "react-hook-form";
// import {useDispatch, useSelector} from "react-redux";
// import {movieAction} from "../../../redux";
// import {MoviesListCard} from "../../MoviesListCard/MoviesListCard";
// import css from './HeaderSearch.module.css';
//
//
//
// const HeaderSearch = () => {
//     const {searched} = useSelector(state => state.movies);
//     const dispatch = useDispatch();
//     const {register,reset} = useForm();
//
//
//
//
//     // const click = async (e) => {
//     //   await setKeyword((value => ({query: +value.get('query')})));
//     //     dispatch(movieAction.searchMovie(e))
//     //     setKeyword(e.target.value);
//     //
//     //     reset();
//     // };
//
//     const handleChange = (e) => {
//         e.preventDefault()
//         if (e.target.value) {
//             dispatch(movieAction.searchMovie({name:e.target.value}))
//         } else {
//
//         }
//
//     }
//     return (
//         <form>
//             <input type="text" placeholder={'search'}
//                    {...register('query')}
//                    onChange={handleChange}
//
//             />
//
//             <div className={css.movies}>
//
//                 {
//                     searched.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
//                 }
//
//
//             </div>
//
//         </form>
//     );
// }
// export {HeaderSearch}