import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx"
import {useGetTopRatedMoviesQuery} from "../../../features/api/movieApi.ts"
import {Box} from "@mui/material"
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx"
import {useState} from "react"
import {PAGE_SIZE} from "../../../common/constants.ts"
import {MoviesPagination} from "../../../common/components/pagination/MoviesPagination.tsx"


export const TopRated = () => {
    const [page, setPage] = useState(1)
    const {data: topRatedMovies} = useGetTopRatedMoviesQuery({params: {page}})

    return (
        <>
            <Box className={'mainpopularWR'}>
                <MoviesNav/>
                <Box className={'secondWR'} sx={{alignItems: "center", maxWidth: '1200px', margin: '0 auto'}}>
                    <h2>Top Rated Moves Page</h2>

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
                                <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path ?? ''}
                                           vote_average={movie.vote_average}
                                />

                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            {topRatedMovies?.results !== undefined && topRatedMovies.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={topRatedMovies?.total_results || 0} page={page} setPage={setPage}/>
            ) : (
                <div></div>
            )}

        </>
    )
}