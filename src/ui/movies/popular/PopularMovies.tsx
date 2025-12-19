import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx";
import {useGetPopularMoviesQuery} from "../../../features/api/movieApi.ts";
import {Box} from "@mui/material";
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx";
import {MoviesPagination} from "../../../common/components/pagination/MoviesPagination.tsx";
import {PAGE_SIZE} from "../../../common/constants.ts";
import {useState} from "react";


export const PopularMovies = () => {
    const [page, setPage] = useState(1)


    const {data: popularMovies} = useGetPopularMoviesQuery({params:{page}});


    return (
        <>
            <MoviesNav/>

            <h1>Popular Movies Page</h1>


            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                {popularMovies?.results.map((movie) => (
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

            {popularMovies?.results !== undefined && popularMovies.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={popularMovies?.total_results || 0} page={page} setPage={setPage} />
            ) : (
                <div></div>
            )}

        </>
    )
}