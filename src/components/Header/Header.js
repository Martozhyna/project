import {Link} from "react-router-dom";

import css from './Header.module.css'
import {SearchMovies} from "../SearchMovies/SearchMovies";
import {HeaderSearch} from "./HeaderSearch/HeaderSearch";



const Header = () => {



    return (
        <div className={css.Header}>
            <div className={css.list}>
                <Link to={''}>ALL</Link>

            </div>
            <div className={css.search}>
                {/*<HeaderSearch/>*/}
            </div>
            <div className={css.bg}>
                background
            </div>
            <div className={css.user}>
                user
            </div>
        </div>
    )
}
export {Header}