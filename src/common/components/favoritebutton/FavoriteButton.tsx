import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


export const FavoriteButton = ({onClick}: Props) => {

    const isItFavoritePage = location.pathname === "/favorites"

    return (

        <IconButton className="favorite-btn" sx={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "grey",
                color: "#d1d5db",
                opacity: 0,
                transition: "opacity 0.3s ease, color 0.3s ease",
                "&:hover": { color: "white", backgroundColor: "#2563eb" },
            }}

            onClick={(e) => {
                if (isItFavoritePage) {
                    onClick(e)
                    window.location.reload();
                } else {
                    e.preventDefault()
                    e.stopPropagation()
                    onClick(e)
                }
            }}

        >
            <FavoriteIcon/>
        </IconButton>
    );

}
