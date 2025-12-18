import { AppBar, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <AppBar position="fixed" color="default" sx={{ top: "auto" , bottom: 0}}>
            <Toolbar sx={{ justifyContent: "center" }}>
                <Typography variant="body2" color="inherit">
                    © 2025 My Movie App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
