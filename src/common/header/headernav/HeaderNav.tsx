// HeaderNav.tsx
import { NavLink } from "react-router"
import React from "react"
import s from './headernav.module.css'

type Props = {
    onHoover: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onLiveHoover: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    theme: { palette: { mode: "light" | "dark" } };
};


export const HeaderNav: React.FC<Props> = ({ onHoover, onLiveHoover, theme }) => {
    const linkStyle = {
        color: theme.palette.mode === "light" ? "black" : "white",
        textDecoration: "none",
        fontWeight: 500,
    };

    return (
        <nav className={s.nav}>
            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={linkStyle}
                className={({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link)}
                to="/"
            >
                Main
            </NavLink>

            <span className={s.text}>|</span>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={linkStyle}
                className={({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link)}
                to="movies/popular"
            >
                Category movies
            </NavLink>

            <span className={s.text}>|</span>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={linkStyle}
                className={({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link)}
                to="filtered-movies"
            >
                filtered-movies
            </NavLink>

            <span className={s.text}>|</span>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={linkStyle}
                className={({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link)}
                to="search"
            >
                Search
            </NavLink>

            <span className={s.text}>|</span>

            <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}
                style={linkStyle}
                className={({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link)}
                to="favorites"
            >
                Favorites
            </NavLink>
        </nav>
    );
};