// src/common/utils/navLinkHoverHandlers.ts
import type { Theme } from "@mui/material";

export const onHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "cornflowerblue";
};

export const onLeaveHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    theme: Theme
) => {
    e.currentTarget.style.color =
        theme.palette.mode === "light" ? "black" : "white";
};
