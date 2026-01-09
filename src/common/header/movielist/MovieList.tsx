import { Box, Skeleton } from "@mui/material"
import {MovieCard} from "../../components/moviecard/MovieCard.tsx"


interface MoviesListProps {
    movieList: any
    isMobileResolution: boolean
}

export const MoviesList: React.FC<MoviesListProps> = ({ movieList, isMobileResolution }) => {
    if (!movieList) {
        return (
            <>
                {Array.from(new Array(isMobileResolution ? 2 : 6)).map((_, index) => (
                    <Box key={index} sx={{ position: "relative", margin: 1 }}>
                        <Skeleton
                            variant="rectangular"
                            width={189}
                            height={270}
                            sx={{ borderRadius: "15px" }}
                        />
                        <Skeleton variant="text" width={180} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width={180} />
                    </Box>
                ))}
            </>
        );
    }

    return isMobileResolution ? (
        <Box
            sx={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                gap: 2,
                "&::-webkit-scrollbar": { display: "none" },
            }}
        >
            {movieList.results.map((movie: any) => (
                <Box
                    key={movie.id}
                    sx={{
                        flex: "0 0 auto",
                        scrollSnapAlign: "start",
                        position: "relative",
                        "&:hover .favorite-btn": { opacity: 1 },
                    }}
                >
                    <MovieCard
                        movieId={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path ?? ""}
                        vote_average={movie.vote_average ?? 0}
                        isMobileResolution={isMobileResolution}
                    />
                </Box>
            ))}
        </Box>
    ) : (
        <>
            {movieList.results.slice(0, 6).map((movie: any) => (
                <Box
                    key={movie.id}
                    sx={{
                        position: "relative",
                        margin: 1,
                        "&:hover .favorite-btn": { opacity: 1 },
                    }}
                >
                    <MovieCard
                        movieId={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path ?? ""}
                        vote_average={movie.vote_average ?? 0}
                    />
                </Box>
            ))}
        </>
    );
};