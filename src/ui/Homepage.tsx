import {SearchBar} from "../common/searchbar/Searchbar.tsx";
import {Box, Grid, Typography} from "@mui/material";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
} from "../features/api/movieApi.ts";
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx";
import {RatingButton} from "../common/components/ratingbutton/RatingButton.tsx";
import {FavoriteButton} from "../common/components/favoritebutton/FavoriteButton.tsx";

export const Homepage = () => {
    const {data: popularMovies} = useGetPopularMoviesQuery();
    const {data: topRatedMovies} = useGetTopRatedMoviesQuery();
    const {data: upcomingMovies} = useGetUpcomingMoviesQuery();
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery();

    const handleSearch = (query: string) => {
        console.log("Поиск:", query);
        // здесь можно вызвать API или фильтрацию
    };

    const handleRatingClick = () => {

    }


    const randomNumber = Math.floor(Math.random() * 20);

    const imageUrl = popularMovies?.results?.[randomNumber]?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${popularMovies.results[randomNumber].backdrop_path}`
        : "";

    return (
        <>
            <Box sx={{
                width: "100vw", height: "700px", backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "left", pl: 4,
                justifyContent: "center", flexDirection: "column",
            }}>

                <Typography variant="h1" sx={{color: "white"}}>welcome</Typography>
                <Typography variant="h2" sx={{color: "white"}}>Browse highlighted titles from TMDB</Typography>

                <SearchBar
                    textFieldSx={{ color: "black", backgroundColor: "white", height: "50px", width: "430px", borderRadius: "40px" }}
                           buttonSx={{color: "white", backgroundColor: "#2563eb", height: "50px", borderRadius: "40px"}}
                           onSearch={handleSearch}
                />

            </Box>





            <h2>Popular Movies</h2>
            <Box sx={{display: "flex", flexWrap: "nowrap"}}>

                {popularMovies?.results.slice(0, 6).map((movie) => (
                    // <Grid item xs={6} sm={4} md={2} key={movie.id}>
                    <Box key={movie.id} sx={{position: "relative", margin: 2,
                        "&:hover .favorite-btn": {opacity: 1,},}}>

                        <MovieCard title={movie.title} posterPath={movie.poster_path}/>
                        <RatingButton voteAverage={movie.vote_average} onClick={handleRatingClick}/>
                        <FavoriteButton/>
                    </Box>
                    // </Grid>
                ))}

            </Box>

            <h2>Top Rated Movies</h2>
            <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                {topRatedMovies?.results.slice(0, 6).map((movie) => (
                    <Box key={movie.id} sx={{position: "relative", margin: 2, "&:hover .favorite-btn": {
                            opacity: 1,
                        },}}>
                        <MovieCard title={movie.title} posterPath={movie.poster_path}/>
                        <RatingButton voteAverage={movie.vote_average} onClick={handleRatingClick}/>
                        <FavoriteButton/>
                    </Box>
                ))}
            </Box>

            <h2>Upcoming Movies</h2>
            <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                {upcomingMovies?.results.slice(0, 6).map((movie) => (
                    <Box key={movie.id} sx={{position: "relative", margin: 2}}>
                        <MovieCard title={movie.title} posterPath={movie.poster_path}/>
                        <RatingButton voteAverage={movie.vote_average} onClick={handleRatingClick}/>
                        <FavoriteButton/>
                    </Box>
                ))}
            </Box>

            <h2>Now Playing Movies</h2>
            <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                {nowPlayingMovies?.results.slice(0, 6).map((movie) => (
                    <Box key={movie.id} sx={{position: "relative", margin: 2}}>
                        <MovieCard title={movie.title} posterPath={movie.poster_path}/>
                        <RatingButton voteAverage={movie.vote_average} onClick={handleRatingClick}/>
                        <FavoriteButton/>
                    </Box>
                ))}
            </Box>
        </>
    );
};