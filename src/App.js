import {Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage, NotFoundPage} from "./containers";
import {MovieInfo} from "./components";
import './App.css'

function App() {

    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}

export {App} ;
