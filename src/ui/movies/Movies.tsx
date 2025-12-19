import {NavLink, Route, Routes} from "react-router";
import {TopRated} from "../movies/toprated/TopRated.tsx"
import * as React from "react";
import {getTheme} from "../../common/theme/theme.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "../../app/app-slice.ts";
import {Outlet} from "react-router-dom"


export const Movies = () => {
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
                         }} className={({isActive}) => (isActive ? "active-link" : "")} to={"/popular"}>Category
                    movies</NavLink>

                <NavLink onMouseEnter={onHoover}
                         onMouseLeave={onLiveHoover}
                         style={{
                             color: theme.palette.mode === "light" ? "black" : "white",
                             textDecoration: "none",
                             fontWeight: 500,
                         }} className={({isActive}) => (isActive ? "active-link" : "")} to={"/toprated"}>Top Rated Movies</NavLink>


            </nav>


            <Routes>
                <Route path={"/toprated"} element={<TopRated />}/>

            </Routes>

            <Outlet/>
        </>
    )
}