import {baseApi} from "./../../app/baseApi"
import type {DetailOfMovieResponse, GenresResponse, ListOfMoviesResponse, MovieCastResponse} from "./movieApi.types.ts";
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

        getSearchMovies: builder.query<ListOfMoviesResponse, {query: string, params: { page: number } }>({
            query: ({query,params}) => ({
                url: `/search/movie?query=${query}`,
                params: { ...params, count: PAGE_SIZE },
            }),
        }),

        getGenreListMovies: builder.query<GenresResponse, void>({
            query: () => ({
                url: `/genre/movie/list`,
            }),
        }),

        getDiscoverMovieMovies: builder.query<ListOfMoviesResponse, {
            params: { sort_by: string, "vote_average.gte": number, "vote_average.lte": number, with_genres: number[],page: number}
        }>({
            query: ({params}) => ({
                url: `/discover/movie`,
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
    useGetDetailsOfMoviesQuery,
    useGetCreditsQuery,
    useGetSimilarQuery,
    useGetSearchMoviesQuery,
    useGetGenreListMoviesQuery,
    useGetDiscoverMovieMoviesQuery,
} = movieApi
