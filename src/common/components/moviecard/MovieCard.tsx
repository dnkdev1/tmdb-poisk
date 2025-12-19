import {Card, CardMedia, CardContent, Typography, Box} from "@mui/material";
import {RatingButton} from "../ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../favoritebutton/FavoriteButton.tsx";

type MovieCardProps = {
    title: string
    posterPath: string
    vote_average:number
};

export const MovieCard = ({ title, posterPath, vote_average }: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w185${posterPath}`;
    const handleRatingClick = () => {

    }

    return (
        <>
        <Card sx={{
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
                <RatingButton voteAverage={vote_average} onClick={handleRatingClick} />
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
