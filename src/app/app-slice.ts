import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {movieApi} from "../features/api/movieApi.ts";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: "light" as ThemeMode,
        status: "idle" as RequestStatus,
        error: null as string | null,
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectAppStatus: (state) => state.status,
        selectAppError: (state) => state.error,
    },






    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state, action) => {

                if (
                    movieApi.endpoints.getPopularMovies.matchPending(action) ||
                    movieApi.endpoints.getTopRatedMovies.matchPending(action) ||
                    movieApi.endpoints.getUpcomingMovies.matchPending(action) ||
                    movieApi.endpoints.getNowPlayingMovies.matchPending(action) ||
                    movieApi.endpoints.getDetailsOfMovies.matchPending(action) ||
                    movieApi.endpoints.getCredits.matchPending(action) ||
                    movieApi.endpoints.getSimilar.matchPending(action) ||
                    movieApi.endpoints.getSearchMovies.matchPending(action) ||
                    movieApi.endpoints.getGenreListMovies.matchPending(action) ||
                    movieApi.endpoints.getDiscoverMovieMovies.matchPending(action)

                ) {
                     state.status = "loading"
                }
return
            })
            .addMatcher(isFulfilled, (state) => {
                state.status = "succeeded"
            })
            .addMatcher(isRejected, (state) => {
                state.status = "failed"
            })
    },



    reducers: (create) => ({
        setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
        setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
            state.status = action.payload.status
        }),
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode
        }),
    }),
})

type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export const { selectThemeMode, selectAppStatus, selectAppError } = appSlice.selectors
export const { changeThemeModeAC, setAppStatusAC, setAppErrorAC } = appSlice.actions
export const appReducer = appSlice.reducer

export type ThemeMode = "dark" | "light"
