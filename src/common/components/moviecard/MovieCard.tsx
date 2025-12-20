import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {RatingButton} from "../ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../favoritebutton/FavoriteButton.tsx";
import {useNavigate} from "react-router-dom";

type MovieCardProps = {
    movieId: number,
    title: string
    posterPath: string
    vote_average:number
};

export const MovieCard = ({movieId, title, posterPath, vote_average }: MovieCardProps) => {

    const navigate = useNavigate();

    const imageUrl = `https://image.tmdb.org/t/p/w185${posterPath}`;

    const handleNavigateClick = () => {
        navigate(`/movie/${movieId}`)
    }

    return (
        <>
        <Card onClick={handleNavigateClick} sx={{
            maxWidth: 200,
            margin: 2,
            borderRadius: "15px",
            boxShadow: "none",
            position: "relative",
        }}>
            <CardMedia
                component="img"
                height="280"
                image={imageUrl}
                alt={`${title} poster`}
                sx={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            />

            <Box sx={{ position: "absolute",
                top: -10,
                right: -10, display: "flex", flexDirection: "column", gap: 1,
            }} >
                <FavoriteButton />
            </Box>

            <Box sx={{ position: "absolute",
                top: -20,
                right: -10, display: "flex", flexDirection: "column", gap: 1,
            }} >
                <RatingButton voteAverage={vote_average} onClick={handleNavigateClick} />
            </Box>



            <CardContent>
                <Typography variant="subtitle1">
                    {title}
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}
