import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    movie: null,
    genre: [],
    searched: [],
    query: ''


};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page},thunkAPI) => {
        try {
            const {data} = await movieService.getMovie(page);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getDetails = createAsyncThunk(
    'movieSlice/getDetails',
    async (id, thunkAPI) => {
        try {
            const {data} = await movieService.getDetailsMovie(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({query},thunkAPI) => {
        try {
            const {data} = await movieService.searchMovie(query);
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)





const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.page = action.payload;

            })
            .addCase(getDetails.fulfilled,(state,action) => {
                state.movie = action.payload;
            })
            .addCase(searchMovie.fulfilled,(state, action) => {
                state.searched = action.payload;
                state.query = action.payload

            })


});

const {reducer: movieReducer,actions} = movieSlice;

const movieAction = {
    getAll,
    getDetails,
    searchMovie


};

export {
    movieReducer,
    movieAction
};