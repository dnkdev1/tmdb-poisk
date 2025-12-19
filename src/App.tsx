import './App.css'
import {Route, Routes} from "react-router";
import {Homepage} from "./ui/Homepage.tsx";
import {Filteredmovies} from "./ui/Filteredmovies.tsx";
import {Search} from "./ui/Search.tsx";
import {Favorites} from "./ui/Favorites.tsx";
import {Header} from "./common/header/Header.tsx";
//import {Footer} from "./common/footer/Footer.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectThemeMode} from "./app/app-slice.ts";
import {getTheme} from "./common/theme/theme.ts";
import {PopularMovies} from "./ui/movies/popular/PopularMovies.tsx";
import {Outlet} from "react-router-dom"
import {TopRated} from "./ui/movies/toprated/TopRated.tsx";
import {Upcoming} from "./ui/movies/upcoming/Upcoming.tsx"
import {NowPlaying} from "./ui/movies/nowplaying/NowPlaying.tsx";

const PATH = {
    HOMEPAGE: '/',
    POPULAR_MOVIES: '/movies/popular',
    TOP_RATED_MOVIES: 'movies/top-rated',
    UPCOMING_MOVIES: '/movies/upcoming',
    NOW_PLAYING_MOVIES: '/movies/now-playing',
    FILTRED_MOVIES: '/filtered-movies',
    SEARCH: '/search',
    FAVORITES: '/favorites',
} as const


function App() {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>

            <div className="content">
                <Routes>
                    <Route path={PATH.HOMEPAGE} element={<Homepage/>}/>
                    <Route path={PATH.POPULAR_MOVIES} element={<PopularMovies/>}/>
                    <Route path={PATH.FILTRED_MOVIES} element={<Filteredmovies/>}/>
                    <Route path={PATH.TOP_RATED_MOVIES} element={<TopRated/>}/>
                    <Route path={PATH.UPCOMING_MOVIES} element={<Upcoming/>}/>
                    <Route path={PATH.NOW_PLAYING_MOVIES} element={<NowPlaying/>}/>
                    <Route path={PATH.SEARCH} element={<Search/>}/>
                    <Route path={PATH.FAVORITES} element={<Favorites/>}/>

                </Routes>
            </div>
            <Outlet/>
            {/*<Footer/>*/}

        </ThemeProvider>
    )
}

export default App
