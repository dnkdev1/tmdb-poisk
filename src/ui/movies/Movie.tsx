import {useGetCreditsQuery, useGetDetailsOfMoviesQuery, useGetSimilarQuery} from "../../features/api/movieApi.ts"
import {useNavigate, useParams} from "react-router-dom"
import {Box, Button, IconButton, Typography} from "@mui/material"
import {MovieCard} from "../../common/components/moviecard/MovieCard.tsx";

export const Movie = () => {
    // const themeMode = useAppSelector(selectThemeMode)
    // const theme = getTheme(themeMode)
    const {id} = useParams<{ id: string }>()
    const navigate = useNavigate()

    const {data: movie} = useGetDetailsOfMoviesQuery(id!)
    const {data: credits} = useGetCreditsQuery(id!)
    const {data: similar} = useGetSimilarQuery(id!)
    let rounded
    let fixedVoiteAverage

    if (movie?.vote_average !== undefined) {
        rounded = Math.ceil(movie?.vote_average * 10) / 10
        fixedVoiteAverage = rounded.toFixed(1)
    }

    let color
    if (Number(fixedVoiteAverage) >= 7)
        color = '#22c55e'

    if (Number(fixedVoiteAverage) > 5 && Number(fixedVoiteAverage) < 7)
        color = '#facc15'

    return (
        <>
            <Box sx={{display: "flex", gap: 4, alignItems: "flex-start", paddingX: 20, paddingY: 2}}>

                <Box sx={{
                    width: "280px", height: "420px", backgroundImage: movie?.poster_path
                        ? `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`
                        : "none", backgroundSize: "cover", backgroundPosition: "center",
                    borderRadius: "20px", flexShrink: 0,
                }}/>

                <Box sx={{flex: 1}}>

                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Typography variant="h4" gutterBottom>
                            {movie?.title}
                        </Typography>

                        <Button onClick={() => navigate(-1)}
                                sx={{
                                    fontSize: "14px",
                                    padding: "4px 0px",
                                    borderRadius: "20px",
                                    border: "1px solid",
                                    borderColor: (theme) => (theme.palette.mode === "light" ? "grey" : "white"),
                                    backgroundColor: (theme) => (theme.palette.mode === "light" ? "white" : "black"),
                                    color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
                                    cursor: "pointer",
                                    "&:hover": {backgroundColor: "#e2e8f0"},
                                }}
                        >
                            Back
                        </Button>


                    </Box>


                    <Box sx={{flex: 1, display: "flex", gap: "20px", marginBottom: "30px"}}>
                        <Typography variant="subtitle1" display="block">Release year:
                            {movie?.release_date ? movie.release_date.slice(0, 4) : ""}
                        </Typography>
                    <IconButton
                        sx={{
                            position: "relative",
                            borderRadius: "50%",
                            backgroundColor: `${color}`,
                            color: "white",
                            fontSize: "14px",
                            "&:hover": {backgroundColor: "rgba(0,0,0,0.9)"},
                        }}

                    >
                        {fixedVoiteAverage}
                    </IconButton>

                        <Typography variant="subtitle1" display="block">Runtime:{" "}
                            {movie?.runtime
                                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                                : ""}
                        </Typography>

                    </Box>

                    <Typography variant="subtitle1" gutterBottom>{movie?.tagline}</Typography>

                    <Typography sx={{paddingBottom: "20px"}} variant="body1">{movie?.overview}</Typography>

                    <Typography variant="h5" gutterBottom>Genres</Typography>

                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: "100px" }}>
                        {movie?.genres?.map((genre) => (
                            <Box
                                key={genre.id}
                                sx={{
                                    backgroundColor: (theme) => (theme.palette.mode === "light" ? "#e5e7eb" : "#1f2b40"),
                                    color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
                                    padding: "4px 8px",
                                    borderRadius: "12px",
                                    fontSize: "14px",
                                }}
                            >
                                {genre.name}
                            </Box>
                        ))}
                    </Box>



                </Box>


            </Box>

            <Box sx={{ paddingX: 20, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>Cast</Typography>



                <Box sx={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {credits?.cast?.slice(0, 6).map((actor) => (

                        <Box key={actor.id} sx={{width: 120, display: "flex", flexDirection: "column",
                                alignItems: "center", justifyContent: "center", textAlign: "center", }} >
                            <Box component="img"
                                 src={ actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`: "/no-image.png" }
                                 alt={actor.name} sx={{ width: 160, height: 160, objectFit: "cover", borderRadius: "50%",
                                    border: "none", marginBottom: "8px", }} />

                            <Typography variant="subtitle2" gutterBottom>{actor.name}</Typography>
                            <Typography variant="caption" gutterBottom>{actor.character}</Typography>
                        </Box>




                    ))}
                </Box>


            </Box>



            <Box sx={{ paddingX: 20, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>Similar Movies</Typography>



                <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                    {similar?.results.slice(0, 6).map((movie) => (
                        <Box key={movie.id} sx={{position: "relative", margin: 2, "&:hover .favorite-btn": {opacity: 1, },}}>

                            <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                                       vote_average={movie.vote_average}
                            />

                        </Box>
                    ))}
                </Box>


            </Box>







        </>
    )
}