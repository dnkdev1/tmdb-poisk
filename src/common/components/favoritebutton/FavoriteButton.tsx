import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
    onClick?: () => void;
};

export const FavoriteButton = ({ onClick }: Props) => (
    <IconButton
        className="favorite-btn"
        sx={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "grey",
            color: "#d1d5db",
            opacity: 0, // скрыта по умолчанию
            transition: "opacity 0.3s ease, color 0.3s ease",
            "&:hover": {
                color: "white",
                backgroundColor: "#2563eb",
            },

        }}
        onClick={onClick}
    >
        <FavoriteIcon />
    </IconButton>
);
