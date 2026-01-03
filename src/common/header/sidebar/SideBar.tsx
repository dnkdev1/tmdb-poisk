import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router";

type SideBarProps = {
    isSideBarNavOpen: boolean;
    toggleSideBarNav: (open: boolean) => (event?: unknown) => void;
};

export const SideBar: React.FC<SideBarProps> = ({ isSideBarNavOpen, toggleSideBarNav }) => {
    return (
        <Drawer anchor="left" open={isSideBarNavOpen} onClose={toggleSideBarNav(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/" onClick={toggleSideBarNav(false)}>
                        <ListItemText primary="Main" />
                    </ListItemButton>
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