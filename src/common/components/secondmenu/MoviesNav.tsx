import {NavLink} from "react-router"
import {useAppSelector} from "../../../common/hooks/useAppSelector"
import {selectThemeMode} from "../../../app/app-slice"
import {getTheme} from "../../../common/theme/theme"
import * as React from "react";


export const MoviesNav = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue"

    }
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white"
    }


    return (
        <nav style={{alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "20px"}}>


            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}

                style={({isActive}) => ({
                    color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                    textDecoration: "none",
                    fontSize: '14px',
                    backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                    borderRadius: 20,
                    borderColor: isActive ? 'transparent' : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),
                    height: "35px",
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid transparent" : "1px solid #d1d5db",
                    marginLeft: '10px',
                    marginRight: "10px",
                })}
                className={({isActive}) => (isActive ? "active-link" : "")}
                to="/movies/popular"
            >
                Category movies
            </NavLink>


            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({isActive}) => ({
                    color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                    textDecoration: "none",
                    fontSize: '14px',
                    backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                    borderRadius: 20,
                    borderColor: isActive ? 'transparent' : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid transparent" : "1px solid #d1d5db",
                    marginLeft: '10px',
                    marginRight: "10px",

                })}
                className={({isActive}) => (isActive ? "active-link" : "")}
                to="/movies/top-rated"
            >
                Top Rated Movies

            </NavLink>


            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({isActive}) => ({
                    color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                    textDecoration: "none",
                    fontSize: '14px',
                    backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                    borderRadius: 20,
                    borderColor: isActive ? 'transparent' : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid transparent" : "1px solid #d1d5db",
                    marginLeft: '10px',
                    marginRight: "10px",
                })}
                className={({isActive}) => (isActive ? "active-link" : "")}
                to="/movies/upcoming"
            >
                Upcoming Movies
            </NavLink>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={({isActive}) => ({
                    color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                    textDecoration: "none",
                    fontSize: '14px',
                    backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                    borderRadius: 20,
                    borderColor: isActive ? 'transparent' : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid transparent" : "1px solid #d1d5db",
                    marginLeft: '10px',
                    marginRight: "10px",
                })}
                className={({isActive}) => (isActive ? "active-link" : "")}
                to="/movies/now-playing"
            >
                Now Playing Movies
            </NavLink>
        </nav>
    )
}
