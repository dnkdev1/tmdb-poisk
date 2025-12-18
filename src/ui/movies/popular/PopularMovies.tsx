import {NavLink, Route, Routes} from "react-router";
import {TopRated} from "../toprated/TopRated.tsx";
import * as React from "react";
import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "../../../app/app-slice.ts";
import {getTheme} from "../../../common/theme/theme.ts";


export const PopularMovies = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue";
    };
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white";
    };

    return (
        <>

                <nav>
                    <NavLink onMouseEnter={onHoover}
                             onMouseLeave={onLiveHoover}
                             style={{
                                 color: theme.palette.mode === "light" ? "black" : "white",
                                 textDecoration: "none",
                                 fontWeight: 500,
                                 border: "solid",
                                 borderRadius: 10,
                                 borderColor: theme.palette.mode === "light" ? "black" : "white",
                             }} className={({isActive}) => (isActive ? "active-link" : "")} to={"movies/popular"}>Category
                        movies</NavLink>

                    <NavLink onMouseEnter={onHoover}
                             onMouseLeave={onLiveHoover}
                             style={{
                                 color: theme.palette.mode === "light" ? "black" : "white",
                                 textDecoration: "none",
                                 fontWeight: 500,
                             }} className={({isActive}) => (isActive ? "active-link" : "")} to={"/movies/toprated"}>Top Rated Movies</NavLink>


                </nav>


                <Routes>
                    <Route path={"toprated"} element={<TopRated />}/>

                </Routes>







            <h1>Popular Movies Page</h1>
        </>
    )
}