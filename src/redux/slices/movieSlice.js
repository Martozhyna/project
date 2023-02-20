import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    movie: null
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
    async (id,thunkAPI) => {
        try {
            const {data} = await movieService.getDetailsMovie(id);
            return data
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
});

const {reducer: movieReducer,actions} = movieSlice;

const movieAction = {
    getAll,
    getDetails
};

export {
    movieReducer,
    movieAction
};