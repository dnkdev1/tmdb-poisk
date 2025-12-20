import {baseApi} from "./../../app/baseApi"
import type {DetailOfMovieResponse, ListOfMoviesResponse, MovieCastResponse} from "./movieApi.types.ts";
import {PAGE_SIZE} from "../../common/constants.ts";


export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getPopularMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/popular`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getTopRatedMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/top_rated`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getUpcomingMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/upcoming`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getNowPlayingMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/now_playing`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getDetailsOfMovies: builder.query<DetailOfMovieResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}`,
            }),
        }),

        getCredits: builder.query<MovieCastResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}/credits`,
            }),
        }),

        getSimilar: builder.query<ListOfMoviesResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}/similar`,
            }),
        }),

    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetDetailsOfMoviesQuery,
    useGetCreditsQuery,
    useGetSimilarQuery
} = movieApi
