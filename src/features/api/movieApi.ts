import {baseApi} from "./../../app/baseApi"
import {
    type DetailOfMovieResponse, DetailOfMovieResponseSchema,
    type GenresResponse, GenresResponseSchema,
    type ListOfMoviesResponse,
    ListOfMoviesResponseSchema,
    type MovieCastResponse, MovieCastResponseSchema
} from "./movieApi.types.ts";
import {PAGE_SIZE} from "../../common/constants.ts";
import {toast} from "react-toastify";


export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getPopularMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({

            query: ({params}) => ({
                url: `/movie/popular`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,               // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toast container from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },

        }),

        getTopRatedMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/top_rated`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },

        }),

        getUpcomingMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/upcoming`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getNowPlayingMovies: builder.query<ListOfMoviesResponse, { params: { page: number } }>({
            query: ({params}) => ({
                url: `/movie/now_playing`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getDetailsOfMovies: builder.query<DetailOfMovieResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}`,
            }),

            responseSchema: DetailOfMovieResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getCredits: builder.query<MovieCastResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}/credits`,
            }),

            responseSchema: MovieCastResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getSimilar: builder.query<ListOfMoviesResponse, string>({
            query: (movie_Id) => ({
                url: `/movie/${movie_Id}/similar`,
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getSearchMovies: builder.query<ListOfMoviesResponse, { query: string, params: { page: number } }>({
            query: ({query, params}) => ({
                url: `/search/movie?query=${query}`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getGenreListMovies: builder.query<GenresResponse, void>({
            query: () => ({
                url: `/genre/movie/list`,
            }),

            responseSchema: GenresResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
        }),

        getDiscoverMovieMovies: builder.query<ListOfMoviesResponse, {
            params: {
                sort_by: string,
                "vote_average.gte": number,
                "vote_average.lte": number,
                with_genres: number[],
                page: number
            }
        }>({
            query: ({params}) => ({
                url: `/discover/movie`,
                params: {...params, count: PAGE_SIZE},
            }),

            responseSchema: ListOfMoviesResponseSchema,              // zod schema
            catchSchemaFailure: (error) => {
                toast(`${error.schemaName} error. ${error.message}`) // call toastcontainer from header.tsx
                return {
                    status: 'CUSTOM_ERROR',                          // field is necessary but useless
                    error: error.schemaName + ' failed validation',  // field is necessary but useless
                    data: error,                                     // field is necessary but useless
                }
            },
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
    useGetSimilarQuery,
    useGetSearchMoviesQuery,
    useGetGenreListMoviesQuery,
    useLazyGetDiscoverMovieMoviesQuery,
} = movieApi




