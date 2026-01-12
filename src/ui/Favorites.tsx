import {getFavoriteMoviesFromLocalStorage} from "../common/utils/localstorage.ts"
import {Box, useMediaQuery} from "@mui/material"
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx"


export const Favorites = () => {

    const favorites = getFavoriteMoviesFromLocalStorage()
    const isMobileResolution = useMediaQuery("(max-width:1024px)")


    return (
        <>
            <Box className={'mainsearchWR'} sx={{alignItems: "center", maxWidth: '1200px', margin: '0 auto'}}>

                <h2>Favorites</h2>

                {/*<Box sx={{display: "flex", flexWrap: "wrap"}}>*/}

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


                    {favorites?.map((movie) => (
                        <Box key={movie.id} sx={{width: "100%"}}>
                            <MovieCard movieId={Number(movie.id)} title={movie.title} posterPath={movie.posterUrl}
                                       vote_average={movie.voteAverage} isMobileResolution={isMobileResolution}
                            />

                        </Box>
                    ))}
                </Box>

            </Box>

        </>
    )
}