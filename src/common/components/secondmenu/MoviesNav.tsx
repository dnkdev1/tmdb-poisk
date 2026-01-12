import {NavLink} from "react-router"
import {useAppSelector} from "../../../common/hooks/useAppSelector"
import {selectThemeMode} from "../../../app/app-slice"
import {getTheme} from "../../../common/theme/theme"
import {useMediaQuery} from "@mui/material";




export const MoviesNav = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue"

    }
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white"
    }

    const isTabletResolution = useMediaQuery("(max-width:800px)")
    const isMobileResolution = useMediaQuery("(max-width:600px)")
    const isMinResolution = useMediaQuery("(max-width:360px)")


    return (


        <nav
            style={{
                display: "grid",
                gridTemplateColumns: isMinResolution
                    ? "1fr"
                    : isMobileResolution
                        ? "repeat(2, 1fr)"
                        : isTabletResolution
                            ? "repeat(2, 1fr)"
                            : "repeat(4, 1fr)",
                gap: "10px",
                rowGap: "20px",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                paddingTop: "20px",
                margin: "0 auto",
                maxWidth: "100%",
            }}
        >



        <NavLink
                onMouseEnter={onHoover}
                onMouseLeave={onLiveHoover}

                style={({isActive}) => ({
                    color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                    textDecoration: "none",
                    fontSize: '14px',
                    backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                    borderRadius: 20,
                    height: "35px",
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: '10px',
                    marginRight: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: isActive ? "transparent" : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),


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
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: '10px',
                    marginRight: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: isActive ? "transparent" : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),

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
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: '10px',
                    marginRight: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: isActive ? "transparent" : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),

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
                    height: '35px',
                    width: '144px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: '10px',
                    marginRight: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: isActive ? "transparent" : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),

                })}
                className={({isActive}) => (isActive ? "active-link" : "")}
                to="/movies/now-playing"
            >
                Now Playing Movies
            </NavLink>
        </nav>
    )
}
