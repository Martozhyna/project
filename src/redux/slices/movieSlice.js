import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    movie: null,
    movieGenres: [],
    moviesByGenre:[],
    with_genres: null,
    searched: [],
    query: '',
    currentGenres: [],

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

const getGenres = createAsyncThunk(
    'movieSlice/getGenre',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getGenres();
            return data.genres;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getMovieByGenre = createAsyncThunk(
    'movieSlice/getMovieByGenre',
    async ({with_genres},thunkAPI) => {
        try {
            const {data} = await movieService.getMovieByGenre(with_genres);
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)



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
        selectGenre: (state, action) => {
            state.currentGenres.push(action.payload);
        },
        deleteGenre: (state, action) => {
            const index = state.currentGenres.findIndex(genre => genre.id === action.payload);
            state.currentGenres.splice(index, 1)
            state.currentGenres.push(action.payload);
        }
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
            .addCase(getGenres.fulfilled,(state, action) => {
                state.movieGenres = action.payload;
            })
            .addCase(getMovieByGenre.fulfilled,(state, action) => {
                state.moviesByGenre = action.payload;
                state.with_genres = action.payload
            })
});

const {reducer: movieReducer,actions:{selectGenre,deleteGenre}} = movieSlice;

const movieAction = {
    getAll,
    getDetails,
    searchMovie,
    getGenres,
    getMovieByGenre,
    selectGenre,
    deleteGenre
};

export {
    movieReducer,
    movieAction
};