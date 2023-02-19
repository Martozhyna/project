import {Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./containers";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MoviesPage/>}/>
        </Routes>
    );
}

export {App} ;
