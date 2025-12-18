import {baseApi} from "./../../app/baseApi"
import type {PopularMoviesResponse} from "./movieApi.types.ts";


export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPopularMovies: builder.query<PopularMoviesResponse, void>({
            query: () => "/movie/popular",
        }),
        getTopRatedMovies: builder.query<PopularMoviesResponse, void>({
            query: () => "/movie/top_rated",
        }),
        getUpcomingMovies: builder.query<PopularMoviesResponse, void>({
            query: () => "/movie/upcoming",
        }),
        getNowPlayingMovies: builder.query<PopularMoviesResponse, void>({
            query: () => "/movie/now_playing",
        }),

    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} = movieApi
