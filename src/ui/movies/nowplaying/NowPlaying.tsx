import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx";
import {useGetNowPlayingMoviesQuery} from "../../../features/api/movieApi.ts";
import {Box} from "@mui/material";
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx";
import {useState} from "react";
import {PAGE_SIZE} from "../../../common/constants.ts";
import {MoviesPagination} from "../../../common/components/pagination/MoviesPagination.tsx";


export const NowPlaying = () => {
    const [page, setPage] = useState(1)
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery({params:{page}})


    return (
        <>
            <MoviesNav />

            <h1>NowPlaying</h1>


            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                {nowPlayingMovies?.results.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            flex: "1 0 18%",
                            margin: 1,
                            position: "relative",
                            "&:hover .favorite-btn": {opacity: 1},
                        }}
                    >
                        <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                            vote_average={movie.vote_average}
                            />

                    </Box>
                ))}
            </Box>

            {nowPlayingMovies?.results !== undefined && nowPlayingMovies.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={nowPlayingMovies?.total_results || 0} page={page} setPage={setPage} />
            ) : (
                <div></div>
            )}

        </>
    )
}