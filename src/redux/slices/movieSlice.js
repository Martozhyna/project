import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],



};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (thunkAPI) => {
        try {
            const {data} = await movieService.getMovie();
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
});

const {reducer: movieReducer,actions} = movieSlice;

const movieAction = {
    getAll
};

export {
    movieReducer,
    movieAction
};