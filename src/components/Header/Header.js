import {Link} from "react-router-dom";

import css from './Header.module.css'
import {Search} from "../Search/Search";



const Header = () => {



    return (
        <div className={css.Header}>
            <div className={css.list}>
                <Link to={''}>ALL</Link>

            </div>
            <div className={css.search}>
                <Search/>
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