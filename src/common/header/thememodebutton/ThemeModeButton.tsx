import React from "react";
import { IconButton } from "@mui/material";

type ThemeModeButtonProps = {
    themeMode: "light" | "dark";
    changeMode: () => void;
};

export const ThemeModeButton: React.FC<ThemeModeButtonProps> = ({ themeMode, changeMode }) => {
    return (
        <IconButton
            onClick={changeMode}
            sx={{
                backgroundColor: themeMode === "light" ? "white" : "black",
                color: themeMode === "light" ? "black" : "white",
                "&:hover": {
                    backgroundColor: themeMode === "light" ? "#f0f0f0" : "#222",
                },
            }}
        >
            {themeMode === "light" ? "🌙" : "☀️"}
        </IconButton>
    );
};