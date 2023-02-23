import {Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./containers";
import {Header, MovieInfo} from "./components";
import './App.css'
import {useTheme} from './hook/useTheme'

function App() {
    const {theme, setTheme} = useTheme();

    const lightTheme = () => {
      setTheme('light')
    }
    const darkTheme = () => {
        setTheme('dark')
    }

    return (
        <div className={'App'}>
            <button onClick={lightTheme}>light</button>
            <button onClick={darkTheme}>dark</button>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieInfo/>}/>
            </Routes>
        </div>

    );
}

export {App} ;
