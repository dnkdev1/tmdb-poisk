import { baseApi } from "./../../app/baseApi"
import type {PopularMoviesResponse} from "./movieApi.types.ts";


export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getListOfPopularMovies: builder.query<PopularMoviesResponse, void>({
            query: () => "/movie/popular",
        }),
    }),
})

export const { useGetListOfPopularMoviesQuery } = movieApi
