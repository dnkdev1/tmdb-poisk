import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({

    reducerPath: "movieApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
            return headers;
        },

    }),


    endpoints: () => ({}),

})


