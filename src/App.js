import {Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./containers";
import {MovieInfo} from "./components";
import './App.css'

function App() {

    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieInfo/>}/>
            </Routes>
        </div>

    );
}

export {App} ;
