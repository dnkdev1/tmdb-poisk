import React from "react";
import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {NavLink} from "react-router";
import {ThemeModeButton} from "../thememodebutton/ThemeModeButton.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {changeThemeModeAC, selectThemeMode} from "../../../app/app-slice.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";

type SideBarProps = {
    isSideBarNavOpen: boolean;
    toggleSideBarNav: (open: boolean) => (event?: unknown) => void;
};

export const SideBar: React.FC<SideBarProps> = ({ isSideBarNavOpen, toggleSideBarNav }) => {
    const dispatch = useAppDispatch()
    const themeMode = useAppSelector(selectThemeMode)



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

    return (
        <Drawer anchor="left" open={isSideBarNavOpen} onClose={toggleSideBarNav(false)} sx={{ "& .MuiDrawer-paper": { width: "80%" } }}>
            <List>
                <ListItem sx={{paddingRight: "50px", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <ListItemButton component={NavLink} to="/" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Main" />
                    </ListItemButton>


                    <ThemeModeButton themeMode={themeMode} changeMode={changeMode} />
                </ListItem>





                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/movies/popular" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Category movies" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/filtered-movies" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Filtered movies" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/search" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Search" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/favorites" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Favorites" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};