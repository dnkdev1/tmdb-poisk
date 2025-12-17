import "./header.css";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "../../app/app-slice.ts";
import {getTheme} from "../theme/theme.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import * as React from "react";

export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()
    const theme = getTheme(themeMode)

    const changeMode = () => {
        dispatch(changeThemeModeAC({themeMode: themeMode === "light" ? "dark" : "light"}))
    }

    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue";
    };
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white";
    };

    return (

        <AppBar position="static" sx={{mb: "30px", backgroundColor: theme.palette.background.default}}>
            <Toolbar>

                <header style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid",
                    justifyContent: "center",
                    color: theme.palette.text.primary,
                }}>
                    <nav>
                        <NavLink onMouseEnter={onHoover}
                                 onMouseLeave={onLiveHoover}
                                 style={{
                                     color: theme.palette.mode === "light" ? "black" : "white",
                                     textDecoration: "none",
                                     fontWeight: 500,
                                 }} className={({isActive}) => (isActive ? "active-link" : "")} to={"/"}>Main</NavLink>
                        <span>|</span>
                        <NavLink onMouseEnter={onHoover}
                                 onMouseLeave={onLiveHoover}
                                 style={{
                                     color: theme.palette.mode === "light" ? "black" : "white",
                                     textDecoration: "none",
                                     fontWeight: 500,
                                 }} className={({isActive}) => (isActive ? "active-link" : "")} to={"movies/popular"}>Category
                            movies</NavLink>
                        <span>|</span>
                        <NavLink onMouseEnter={onHoover}
                                 onMouseLeave={onLiveHoover}
                                 style={{
                                     color: theme.palette.mode === "light" ? "black" : "white",
                                     textDecoration: "none",
                                     fontWeight: 500,
                                 }} className={({isActive}) => (isActive ? "active-link" : "")}
                                 to={"filtered-movies"}>filtered-movies</NavLink>
                        <span>|</span>
                        <NavLink onMouseEnter={onHoover}
                                 onMouseLeave={onLiveHoover}
                                 style={{
                                     color: theme.palette.mode === "light" ? "black" : "white",
                                     textDecoration: "none",
                                     fontWeight: 500,
                                 }} className={({isActive}) => (isActive ? "active-link" : "")}
                                 to={"search"}>Search</NavLink>
                        <span>|</span>
                        <NavLink onMouseEnter={onHoover}
                                 onMouseLeave={onLiveHoover}
                                 style={{
                                     color: theme.palette.mode === "light" ? "black" : "white",
                                     textDecoration: "none",
                                     fontWeight: 500,
                                 }} className={({isActive}) => (isActive ? "active-link" : "")}
                                 to={"favorites"}>Favorites</NavLink>
                    </nav>

                    <IconButton onClick={changeMode} sx={{ backgroundColor: themeMode === "light" ? "white" : "black", color: themeMode === "light" ? "black" : "white", "&:hover": { backgroundColor: themeMode === "light" ? "#f0f0f0" : "#222", }, }} >
                        {themeMode === "light" ? "🌙" : "☀️"}
                    </IconButton>
                </header>
            </Toolbar>
        </AppBar>
    )
}