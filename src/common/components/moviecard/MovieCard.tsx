import {Box, Card, CardContent, CardMedia, Typography, useMediaQuery} from "@mui/material";
import {RatingButton} from "../ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../favoritebutton/FavoriteButton.tsx";
import {useNavigate} from "react-router";
import {manageFavoriteMovieToLocalStorage} from "../../utils/localstorage.ts";

export type Props = {
    movieId: number,
    title: string
    posterPath: string
    vote_average: number
    isMobileResolution: boolean
}

export type FavoriteMovie = {
    id: string
    posterUrl: string
    title: string
    voteAverage: number
}

export const MovieCard = ({movieId, title, posterPath, vote_average, isMobileResolution}: Props) => {

    const navigate = useNavigate()


    const imageUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : "https://placehold.co/188x270/EEE/31343C?font=montserrat&text=no+poster"


    const handleNavigateClick = () => {
        navigate(`/movie/${movieId}`)
    }

    const isMinResolution = useMediaQuery("(max-width:700px)")


    return (
        <>

            <Card
                onClick={handleNavigateClick}
                sx={{
                    maxWidth: isMinResolution ? "none" : "189px",
                    borderRadius: "15px",
                    boxShadow: "none",
                    position: "relative",
                    background: "none",
                    backgroundColor: "unset",
                }}
            >
                <CardMedia
                    component="img"
                    height="270"
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

                <Box sx={{ position: "absolute", top: -10, right: -10, display: "flex", flexDirection: "column", gap: 1 }}>
                    <FavoriteButton
                        movieId={movieId}
                        onClick={(e) => {
                            e.preventDefault()
                            manageFavoriteMovieToLocalStorage(
                                movieId.toString(),
                                imageUrl,
                                title,
                                vote_average
                            )
                        }}
                        isMobileResolution={isMobileResolution}
                    />
                </Box>

                <Box sx={{ position: "absolute", top: -30, right: -10, display: "flex", flexDirection: "column", gap: 1 }}>
                    <RatingButton voteAverage={vote_average} onClick={handleNavigateClick} />
                </Box>

                <CardContent
                    sx={{
                        background: "none",
                        backgroundColor: "unset",
                        padding: "8px 0",
                    }}
                >
                    <Typography variant="subtitle1">{title}</Typography>
                </CardContent>
            </Card>



        </>
    )
}


