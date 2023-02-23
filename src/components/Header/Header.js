import {Link} from "react-router-dom";

import css from './Header.module.css'




const Header = () => {



    return (
        <div className={css.Header}>
            <div className={css.list}>
                <Link to={''}>All movie</Link>
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