import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type {FavoriteMovie} from "../moviecard/MovieCard.tsx";
import {useState} from "react";


type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    movieId: number
}


export const FavoriteButton = ({onClick, movieId}: Props) => {

    const isItFavoritePage = location.pathname === "/favorites"
    const [isFavorite, setIsFavorite] = useState(() => {
        const existing = localStorage.getItem("Favorites")
        const favorites: FavoriteMovie[] = existing ? JSON.parse(existing) : []
        return !!favorites.find((movie) => movie.id === movieId.toString())
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isItFavoritePage) {
            onClick(e);
            window.location.reload();
        } else {
            e.preventDefault();
            e.stopPropagation();
            onClick(e);

            // обновляем состояние сразу
            setIsFavorite((prev) => !prev);
        }
    };


    return (

        <IconButton className="favorite-btn"
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "#1f2937",
                        color: isFavorite ? "#facc15" : "#d1d5db",
                        opacity: isFavorite ? 1 : 0,
                        border: "none",
                        transition: isFavorite ? "none" : "opacity 0.3s ease, color 0.3s ease",
                        "&:hover": {
                            color: isFavorite ? "#facc15" : "#d1d5db",
                            backgroundColor: "#2563eb",
                            border: "none",
                        },
                        "&:focus": {
                            outline: "none",
                        },
                        "&:focus-visible": {
                            outline: "none",
                        },
                    }}



                    onClick={handleClick}

        >
            <FavoriteIcon/>
        </IconButton>
    );

}
