import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {handleError} from "../common/utils/handleError.ts";


export const baseApi = createApi({
    reducerPath: "movieApi",

    baseQuery: async (args, api, extraOptions) => {

        const result = await fetchBaseQuery({
            baseUrl: "https://api.themoviedb.org/3",

            prepareHeaders: (headers) => {
                headers.set("Authorization", `Bearer ${import.meta.env.VITE_API_KEY}`)
            },
        })(args, api, extraOptions)

        handleError(api, result)

        return result
    },
    endpoints: () => ({}),
})