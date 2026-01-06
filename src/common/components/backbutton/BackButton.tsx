import { NavLink } from "react-router";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

interface BackButtonProps {
    onHoover?: () => void;
    onLiveHoover?: () => void;
    navigateBack: () => void;
    to?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
                                                          onHoover,
                                                          onLiveHoover,
                                                          navigateBack,
                                                          to = "/movies/popular",
                                                      }) => {
    const theme = useTheme()


    return (
        <NavLink
            onMouseEnter={onHoover}
            onMouseLeave={onLiveHoover}
            onClick={navigateBack}
            style={({ isActive }) => ({
                color: isActive
                    ? "white"
                    : theme.palette.mode === "light"
                        ? "black"
                        : "white",
                textDecoration: "none",
                fontSize: "14px",
                backgroundColor: isActive
                    ? "#2563eb"
                    : theme.palette.mode === "light"
                        ? "#d1d5db"
                        : "transparent",
                borderRadius: 20,
                borderColor: isActive
                    ? "transparent"
                    : theme.palette.mode === "light"
                        ? "#d1d5db"
                        : "#27354f",
                height: "35px",
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: isActive
                    ? "1px solid transparent"
                    : "1px solid #d1d5db",
                marginLeft: "10px",
                marginRight: "10px",
            })}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={to}
        >
            Back
        </NavLink>
    );
};