import {useGetCreditsQuery, useGetDetailsOfMoviesQuery, useGetSimilarQuery} from "../../features/api/movieApi.ts"
import {useNavigate, useParams} from "react-router"
import {IconButton, Typography} from "@mui/material"
import {MovieCard} from "../../common/components/moviecard/MovieCard.tsx"
import s from './movie.module.css'

export const Movie = () => {

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
                <div className={s.container}>
                    <div
                        className={s.poster}
                        style={{
                            backgroundImage: movie?.poster_path
                                ? `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`
                                : "none",
                        }}
                    />

                    <div className={s.details}>

                        <div className={s.headerRow}>

                            <Typography variant="h4" gutterBottom>{movie?.title}</Typography>

                            <button onClick={() => navigate(-1)} className={s.backButton} >Back</button>

                        </div>

                        <div className={s.infoRow}>
                            <Typography variant="subtitle1">Release year: {movie?.release_date?.slice(0, 4)}</Typography>

                            <IconButton className={s.vote} sx={{ backgroundColor: color }}>{fixedVoiteAverage}</IconButton>

                            <Typography variant="subtitle1">
                                Runtime:{" "}
                                {movie?.runtime
                                    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                                    : ""}
                            </Typography>
                        </div>

                        <Typography variant="subtitle1" gutterBottom>{movie?.tagline}</Typography>

                        <Typography variant="body1" gutterBottom>{movie?.overview}</Typography>

                        <Typography variant="h5" gutterBottom>Genres</Typography>

                        <div className={s.genres}>
                            {movie?.genres?.map((genre) => (
                                <div key={genre.id} className={s.genre}>
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={s.castSection}>
                    <Typography variant="h5" gutterBottom>Cast</Typography>

                    <div className={s.castList}>
                        {credits?.cast?.slice(0, 6).map((actor) => (
                            <div key={actor.id} className={s.castItem}>
                                <img
                                    src={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                            : "/no-image.png"
                                    }
                                    alt={actor.name}
                                    className={s.castImage}
                                />
                                <Typography variant="subtitle2">{actor.name}</Typography>
                                <Typography variant="caption">{actor.character}</Typography>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={s.similarSection}>
                    <Typography variant="h5" gutterBottom>Similar Movies</Typography>

                    <div className={s.similarList}>
                        {similar?.results.slice(0, 6).map((movie) => (
                            <div key={movie.id} className={s.similarItem}>
                                <MovieCard
                                    movieId={movie.id}
                                    title={movie.title}
                                    posterPath={movie.poster_path}
                                    vote_average={movie.vote_average}
                                />
                            </div>
                        ))}
                    </div>
                </div>

        </>
    )
}