import { AppBar, Toolbar, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <AppBar position="static" color="default" >
            <Toolbar sx={{ justifyContent: "center" }}>
                <Typography variant="body2" color="inherit">
                    © 2025 Poisk Demo · Data courtesy of TMDB.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
