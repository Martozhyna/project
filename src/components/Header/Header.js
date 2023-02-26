import {Link} from "react-router-dom";

import css from './Header.module.css'
import {useTheme} from "../../hook";
import {UserInfo} from "../UserInfo/UserInfo";
import {GenresList} from "../GenresList/GenresList";

const Header = () => {
    const {theme, setTheme} = useTheme();


    const lightTheme = () => {
        setTheme('light')
    };

    const darkTheme = () => {
        setTheme('dark')
    };


    return (
        <div className={css.Header}>
            <div className={css.list}>
                <Link to={''}>All movie</Link>
            </div>
            <div className={css.genreList}>
                <GenresList/>
            </div>
            <div className={css.title}>
                <h1>Usual movies site</h1>
            </div>

            <div className={css.bg}>
                <button className={css.btnLight} onClick={lightTheme}>Light</button>
                <button className={css.btnDark} onClick={darkTheme}>Dark</button>
            </div>
            <div className={css.user}>
                <UserInfo/>
            </div>
        </div>
    );
};
export {Header};