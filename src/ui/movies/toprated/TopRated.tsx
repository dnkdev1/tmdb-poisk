import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx";
import {useGetTopRatedMoviesQuery} from "../../../features/api/movieApi.ts";
import {Box} from "@mui/material";
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx";


export const TopRated = () => {
    const {data: topRatedMovies} = useGetTopRatedMoviesQuery()

    return (
        <>

            <MoviesNav />

            <h1>Top Rated Moves Page</h1>

            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                {topRatedMovies?.results.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            flex: "1 0 18%",
                            margin: 1,
                            position: "relative",
                            "&:hover .favorite-btn": {opacity: 1},
                        }}
                    >
                        <MovieCard
                            title={movie.title}
                            posterPath={movie.poster_path}
                            vote_average={movie.vote_average}
                            />

                    </Box>
                ))}
            </Box>
        </>
    )
}