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
    HOMEPAGE: '/homepage',
    CATEGORYMOVIES: '/movies',
    POPULARMOVIES: '/movies/popular',
    TOPRATEDMOVIES: 'movies/top-rated',
    UPCOMINGMOVIES: '/movies/upcoming',
    NOWPLAYINGMOVIES: '/movies/now-playing',
    FILTREDMOVIES: '/filtered-movies',
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
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/movies/popular"} element={<PopularMovies/>}/>
                    <Route path={"/filtered-movies"} element={<Filteredmovies/>}/>
                    <Route path={"/movies/top-rated"} element={<TopRated/>}/>
                    <Route path={"/movies/upcoming"} element={<Upcoming/>}/>
                    <Route path={"/movies/now-playing"} element={<NowPlaying/>}/>
                    <Route path={"/search"} element={<Search/>}/>
                    <Route path={"/favorites"} element={<Favorites/>}/>


                </Routes>
            </div>
            <Outlet/>
            {/*<Footer/>*/}

        </ThemeProvider>
    )
}

export default App
