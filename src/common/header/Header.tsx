import s from './header.module.css'
import {useAppSelector} from "../hooks/useAppSelector.ts"
import {changeThemeModeAC, selectAppError, selectAppStatus, selectThemeMode} from "../../app/app-slice.ts"
import {getTheme} from "../theme/theme.ts"
import {useAppDispatch} from "../hooks/useAppDispatch.ts"
import {AppBar, IconButton, LinearProgress, Snackbar, Toolbar, useMediaQuery} from "@mui/material"
import * as React from "react"
import {useState} from "react"
import {ToastContainer} from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import {Logo} from "./logo/Logo.tsx";
import {HeaderNav} from "./headernav/HeaderNav.tsx";
import {SideBar} from "./sidebar/SideBar.tsx";
import {ThemeModeButton} from "./thememodebutton/ThemeModeButton.tsx";


export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)
    const dispatch = useAppDispatch()
    const status = useAppSelector(selectAppStatus)
    const error = useAppSelector(selectAppError)
    const [openSnackbar, setOpenSnackbar] = useState(false)


    const isMobileResolution = useMediaQuery("(max-width:600px)")
    const [isSideBarNavOpen, setIsSideBarNavOpen] = useState(false)

    const toggleSideBarNav = (open: boolean) => () => {
        setIsSideBarNavOpen(open)
    }

    const changeMode = () => {
        const ls = localStorage.getItem('theme')
        if (ls && ls === 'light') {
            localStorage.setItem('theme', 'dark')
            dispatch(changeThemeModeAC({themeMode: 'dark'}))
        }
        if (ls && ls === 'dark') {
            localStorage.setItem('theme', 'light')
            dispatch(changeThemeModeAC({themeMode: 'light'}))
        }
    }
    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue"
    }
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white"
    }
    const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return
        setOpenSnackbar(false)
    }
    React.useEffect(() => {
        if (error) {
            setOpenSnackbar(true)
        }
    }, [error])

    return (

        <>
            <AppBar
                position="relative"
                sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    width: "100vw",
                    justifyContent: "center",
                }}
            >
                <div className={s.wrapper}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            width: "100%",
                            paddingInline: "0",
                            ["@media (min-width:600px)"]: { paddingInline: "0" },
                            justifyContent: "space-between",
                        }}
                    >
                        {isMobileResolution ? (
                            <>
                                <div style={{ display: "flex", alignItems: "center", gap: "24px", justifyContent: 'space-between', width: '590px' }}>
                                    <IconButton onClick={toggleSideBarNav(true)} color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                    <Logo />
                                    <ThemeModeButton themeMode={themeMode} changeMode={changeMode} />
                                </div>

                                <SideBar
                                    isSideBarNavOpen={isSideBarNavOpen}
                                    toggleSideBarNav={toggleSideBarNav}
                                />
                            </>
                        ) : (
                            <div
                                className={s.headerWR}
                                style={{ display: "flex", alignItems: "center", gap: "20px" }}
                            >
                                <Logo />
                                <HeaderNav
                                    theme={theme}
                                    onHoover={(e: React.MouseEvent<HTMLAnchorElement>) => onHoover(e)}
                                    onLiveHoover={(e: React.MouseEvent<HTMLAnchorElement>) => onLiveHoover(e)}
                                />
                                <ThemeModeButton themeMode={themeMode} changeMode={changeMode} />
                            </div>
                        )}
                    </Toolbar>
                </div>
            </AppBar>

            {status === "loading" && (
                <LinearProgress
                    variant="query"
                    sx={{
                        margin: "0px",
                        height: "5px",
                        borderRadius: 0,
                        backgroundColor: themeMode === "light" ? "#222" : "#e5e7eb",
                    }}
                />
            )}

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message={error}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            />

            <ToastContainer />
        </>
    )
}