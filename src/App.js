import {Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./containers";
import {Header, MovieInfo} from "./components";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieInfo/>}/>
            </Routes>
        </div>

    );
}

export {App} ;
