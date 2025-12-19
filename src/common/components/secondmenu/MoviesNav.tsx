import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../common/hooks/useAppSelector";
import { selectThemeMode } from "../../../app/app-slice";
import { getTheme } from "../../../common/theme/theme";
import * as React from "react";


export const MoviesNav = () => {
    const themeMode = useAppSelector(selectThemeMode);
    const theme = getTheme(themeMode);


    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue";
    };
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white";
    };



    return (
        <nav>
            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({ isActive }) => ({
                    color: theme.palette.mode === "light" ? "black" : "white",
                    textDecoration: "none",
                    fontWeight: 500,
                    backgroundColor: isActive ? "#2563eb" : "transparent",
                    borderRadius: 20,
                    marginRight: "20px",
                })}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/movies/popular"
            >
                Category movies
            </NavLink>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({ isActive }) => ({
                    color: theme.palette.mode === "light" ? "black" : "white",
                    textDecoration: "none",
                    fontWeight: 500,
                    backgroundColor: isActive ? "#2563eb" : "transparent",
                    borderRadius: 20,
                    marginRight: "20px",
                })}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/movies/top-rated"
            >
                Top Rated Movies
            </NavLink>


            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({ isActive }) => ({
                    color: theme.palette.mode === "light" ? "black" : "white",
                    textDecoration: "none",
                    fontWeight: 500,
                    backgroundColor: isActive ? "#2563eb" : "transparent",
                    borderRadius: 20,
                    marginRight: "20px",
                })}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/movies/upcoming"
            >
                Upcoming Movies
            </NavLink>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({ isActive }) => ({
                    color: theme.palette.mode === "light" ? "black" : "white",
                    textDecoration: "none",
                    fontWeight: 500,
                    backgroundColor: isActive ? "#2563eb" : "transparent",
                    borderRadius: 20,
                    marginRight: "20px",
                })}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/movies/now-playing"
            >
                Now Playing Movies
            </NavLink>
        </nav>
    );
};
