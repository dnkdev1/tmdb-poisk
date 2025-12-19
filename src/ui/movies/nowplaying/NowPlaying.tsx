import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx";
import {useGetNowPlayingMoviesQuery} from "../../../features/api/movieApi.ts";
import {Box} from "@mui/material";
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx";
import {RatingButton} from "../../../common/components/ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../../../common/components/favoritebutton/FavoriteButton.tsx";


export const NowPlaying = () => {
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery();

    const handleRatingClick = () => {

    }


    return (
        <>
            <MoviesNav />

            <h1>NowPlaying</h1>


            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {nowPlayingMovies?.results.map((movie) => (
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