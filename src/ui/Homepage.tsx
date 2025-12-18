import {SearchBar} from "../common/searchbar/Searchbar.tsx";
import {Box} from "@mui/material";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "../features/api/movieApi.ts";
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx";


export const Homepage = () => {

    const {data: popularMovies} = useGetPopularMoviesQuery();
    const {data: topRatedMovies } = useGetTopRatedMoviesQuery()
    const {data: upcomingMovies } = useGetUpcomingMoviesQuery()
    const {data: nowPlayingMovies } = useGetNowPlayingMoviesQuery()

    console.log(popularMovies?.results)

    const handleSearch = (query: string) => {
        console.log("Поиск:", query);
        // здесь можно вызвать API или фильтрацию
    };

    const randomNumber = Math.floor(Math.random() * 20)

    const imageUrl = popularMovies?.results?.[randomNumber]?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${popularMovies.results[randomNumber].backdrop_path}`
        : ""


    return (
        <>
        <h1>welcome</h1>
        <h2>Browse highlighted titles from TMDB</h2>

        <Box sx={{width: "100vw", height: "700px",
            backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", }} >
            <SearchBar onSearch={handleSearch}/>

        </Box>

            <h2>Popular Movies</h2>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {popularMovies?.results.slice(0, 6).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </Box>

            <h2>Top Rated Movies</h2>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {topRatedMovies?.results.slice(0, 6).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </Box>

            <h2>Upcoming Movies</h2>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {upcomingMovies?.results.slice(0, 6).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </Box>

            <h2>Now Playing Movies</h2>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {nowPlayingMovies?.results.slice(0, 6).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </Box>



        </>
)
}