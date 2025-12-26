import {useGetCreditsQuery, useGetDetailsOfMoviesQuery, useGetSimilarQuery} from "../../features/api/movieApi.ts"
import {NavLink, useNavigate, useParams} from "react-router"
import {IconButton, Typography} from "@mui/material"
import {MovieCard} from "../../common/components/moviecard/MovieCard.tsx"
import s from './movie.module.css'
import * as React from "react";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "../../app/app-slice.ts";
import {getTheme} from "../../common/theme/theme.ts";

export const Movie = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

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


    const onHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = "cornflowerblue"

    }
    const onLiveHoover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = theme.palette.mode === "light" ? "black" : "white"
    }

    return (
        <>

            <div className={s.container}>
                <div
                    className={s.poster}
                    style={{
                        backgroundImage: movie?.poster_path
                            ? `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`
                            : `url(https://placehold.co/188x270/EEE/31343C?font=montserrat&text=no+poster)`,
                    }}
                />

                <div className={s.details}>

                    <div className={s.headerRow}>

                        <Typography variant="h4" fontWeight={700} gutterBottom>{movie?.title}</Typography>

                        {/*<button onClick={() => navigate(-1)} className={s.backButton}>Back</button>*/}

                        <NavLink
                            onMouseEnter={onHoover}
                            onMouseLeave={onLiveHoover}
                            onClick={() => navigate(-1)}
                            style={({isActive}) => ({
                                color: isActive ? "white" : (theme.palette.mode === "light" ? "black" : "white"),
                                textDecoration: "none",
                                fontSize: '14px',
                                backgroundColor: isActive ? "#2563eb" : (theme.palette.mode === "light" ? "#d1d5db" : "transparent"),
                                borderRadius: 20,
                                borderColor: isActive ? 'transparent' : (theme.palette.mode === "light" ? "#d1d5db" : "#27354f"),
                                height: "35px",
                                width: '100px',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: isActive ? "1px solid transparent" : "1px solid #d1d5db",
                                marginLeft: '10px',
                                marginRight: "10px",
                            })}
                            className={({isActive}) => (isActive ? "active-link" : "")}
                            to="/movies/popular"
                        >
                            Back
                        </NavLink>


                    </div>

                    <div className={s.infoRow}>
                        <Typography variant="subtitle1">Release year: {movie?.release_date?.slice(0, 4)}</Typography>

                        <IconButton className={s.vote} sx={{backgroundColor: color}}>{fixedVoiteAverage}</IconButton>

                        <Typography variant="subtitle1">
                            Runtime:{" "}
                            {movie?.runtime
                                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                                : ""}
                        </Typography>
                    </div>

                    <Typography variant="subtitle1" gutterBottom>{movie?.tagline}</Typography>

                    <Typography variant="body1" gutterBottom>{movie?.overview}</Typography>

                    <Typography variant="h5" fontWeight={700} gutterBottom>Genres</Typography>

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
                <Typography variant="h5" fontWeight={700} gutterBottom>Cast</Typography>

                <div className={s.castList}>
                    {credits?.cast?.slice(0, 6).map((actor) => (
                        <div key={actor.id} className={s.castItem}>
                            <img
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                        : "https://placehold.co/280x420/EEE/31343C?font=montserrat&text=no%20poster"
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
                <Typography variant="h5" fontWeight={700} gutterBottom>Similar Movies</Typography>

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