import './App.css'
import {Route, Routes} from "react-router";
import {Homepage} from "./ui/Homepage.tsx";
import {Movies} from "./ui/Movies.tsx";
import {Filteredmovies} from "./ui/Filteredmovies.tsx";
import {Search} from "./ui/Search.tsx";
import {Favorites} from "./ui/Favorites.tsx";
import {Header} from "./common/header/Header.tsx";
import {Footer} from "./common/footer/Footer.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectThemeMode} from "./app/app-slice.ts";
import {getTheme} from "./common/theme/theme.ts";

function App() {
    const themeMode = useAppSelector(selectThemeMode)

    const theme = getTheme(themeMode)
    console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>

            <div className={"wrapper"}>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/movies/popular"} element={<Movies/>}/>
                    <Route path={"/filtered-movies"} element={<Filteredmovies/>}/>
                    <Route path={"/search"} element={<Search/>}/>
                    <Route path={"/favorites"} element={<Favorites/>}/>
                </Routes>
            </div>

            <Footer/>

        </ThemeProvider>
    )
}

export default App
