import {baseApi} from "./../../app/baseApi"
import type {PopularMoviesResponse} from "./movieApi.types.ts";
import {PAGE_SIZE} from "../../common/constants.ts";


export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getPopularMovies: builder.query<PopularMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/popular`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getTopRatedMovies: builder.query<PopularMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/top_rated`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getUpcomingMovies: builder.query<PopularMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/upcoming`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getNowPlayingMovies: builder.query<PopularMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/now_playing`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} = movieApi
