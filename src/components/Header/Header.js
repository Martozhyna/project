import {Link} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    //плашка, яка завжди буде відображатися, або зверху, або збоку
    return (
        <div className={css.Header}>
            <div className={css.list}>
                <Link to={''}>ALL</Link>
            </div>
            <div className={css.search}>
                search
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