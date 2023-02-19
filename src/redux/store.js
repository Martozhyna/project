//store
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};