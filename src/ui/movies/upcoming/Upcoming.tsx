import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx";
import {Box} from "@mui/material";
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx";
import {RatingButton} from "../../../common/components/ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../../../common/components/favoritebutton/FavoriteButton.tsx";
import {useGetUpcomingMoviesQuery} from "../../../features/api/movieApi.ts";

export const Upcoming = () => {
    const {data: upcomingMovies} = useGetUpcomingMoviesQuery();

    const handleRatingClick = () => {

    }

    return (
        <>
            <MoviesNav />

            <h1>Upcoming Moves Page</h1>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {upcomingMovies?.results.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            flex: "1 0 18%",
                            margin: 1,
                            position: "relative",
                            "&:hover .favorite-btn": { opacity: 1 },
                        }}
                    >
                        <MovieCard title={movie.title} posterPath={movie.poster_path} />
                        <RatingButton voteAverage={movie.vote_average} onClick={handleRatingClick} />
                        <FavoriteButton />
                    </Box>
                ))}
            </Box>
        </>
    )
}