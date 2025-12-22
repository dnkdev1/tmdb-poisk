import {getFavoriteMoviesFromLocalStorage} from "../common/utils/localstorage.ts"
import {Box} from "@mui/material"
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx"


export const Favorites = () => {

    const favorites = getFavoriteMoviesFromLocalStorage()

    return (
        <>
            <h1>Favorites</h1>

            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                {favorites?.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            flex: "1 0 18%",
                            margin: 1,
                            position: "relative",
                            "&:hover .favorite-btn": {opacity: 1},
                        }}
                    >
                        <MovieCard movieId={Number(movie.id)} title={movie.title} posterPath={movie.posterUrl}
                                   vote_average={movie.voteAverage}
                        />

                    </Box>
                ))}
            </Box>
        </>
    )
}