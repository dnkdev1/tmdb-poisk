import {MoviesNav} from "../../../common/components/secondmenu/MoviesNav.tsx"
import {useGetPopularMoviesQuery} from "../../../features/api/movieApi.ts"
import {Box, Skeleton, useMediaQuery} from "@mui/material"
import {MovieCard} from "../../../common/components/moviecard/MovieCard.tsx"
import {MoviesPagination} from "../../../common/components/pagination/MoviesPagination.tsx"
import {PAGE_SIZE} from "../../../common/constants.ts"
import {useState} from "react"

export const PopularMovies = () => {
    const [page, setPage] = useState(1)

    const {data: popularMovies} = useGetPopularMoviesQuery({params: {page}});

    const isMobileResolution = useMediaQuery("(max-width:800px)")


    return (
        <>
            <Box className={'mainpopularWR'}>
                <MoviesNav/>

                <Box className={'secondWR'} sx={{alignItems: "center", maxWidth: '1200px', margin: '0 auto'}}>
                    <h2 style={{ textAlign: "center" }}>Popular Movies Page</h2>

                    <Box
                        sx={{
                            display: "grid",
                            gap: 2,
                            px: "14px",

                            gridTemplateColumns: "repeat(5, 1fr)",

                            "@media (max-width:1024px)": {
                                gridTemplateColumns: "repeat(4, 1fr)",
                            },

                            "@media (max-width:800px)": {
                                gridTemplateColumns: "repeat(3, 1fr)",
                            },

                            "@media (max-width:600px)": {
                                gridTemplateColumns: "repeat(2, 1fr)",
                            },

                            "@media (max-width:360px)": {
                                gridTemplateColumns: "repeat(1, 1fr)",
                            },

                            justifyItems: "center",
                        }}
                    >
                        {popularMovies
                            ? popularMovies.results.map((movie) => (
                                <Box key={movie.id} sx={{width: "100%"}}>
                                    <MovieCard
                                        movieId={movie.id}
                                        title={movie.title}
                                        posterPath={movie.poster_path ?? ""}
                                        vote_average={movie.vote_average ?? 0}
                                        isMobileResolution={isMobileResolution}
                                    />
                                </Box>
                            ))
                            : Array.from(new Array(20)).map((_, index) => (
                                <Box key={index} sx={{width: "100%"}}>
                                    <Skeleton
                                        variant="rectangular"
                                        width={189}
                                        height={270}
                                        sx={{borderRadius: "15px"}}
                                    />
                                    <Skeleton variant="text" width={180} sx={{mt: 1}}/>
                                    <Skeleton variant="text" width={180}/>
                                </Box>
                            ))}
                    </Box>
                </Box>
            </Box>


            {popularMovies?.results !== undefined && popularMovies.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={popularMovies?.total_results || 0} page={page} setPage={setPage}/>
            ) : (
                <div></div>
            )}


        </>
    )
}