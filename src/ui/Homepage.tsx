import {SearchBar} from "../common/searchbar/Searchbar.tsx"
import {Box, Button, Typography} from "@mui/material"
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
} from "../features/api/movieApi.ts"
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx"
import {useState} from "react"
import {useNavigate} from "react-router"

const randomNumber = Math.floor(Math.random() * 20)

export const Homepage = () => {

    const [search, setSearch] = useState('')
    console.log(search)

    const navigate = useNavigate()
    const page = 1
    const {data: popularMovies} = useGetPopularMoviesQuery({params: {page}})
    const {data: topRatedMovies} = useGetTopRatedMoviesQuery({params: {page}})
    const {data: upcomingMovies} = useGetUpcomingMoviesQuery({params: {page}})
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery({params: {page}})

    const onChangeSearch = (value: string) => navigate(`/search?query=${encodeURIComponent(value)}`)

    const handleSearch = (value: string) => setSearch(value)

    const clearResults = () => setSearch("")

    const imageUrl = popularMovies?.results?.[randomNumber]?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${popularMovies.results[randomNumber].backdrop_path}`
        : "";

    return (
        <>
            <Box className={'testWRAPPER'}>
                <Box sx={{
                    width: "100vw", height: "700px", backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", pl: 4,
                    justifyContent: "center", flexDirection: "column",
                }}>

                    <Box className={'searchWR'} sx={{minWidth: '1200px'}}>
                    <Typography variant="h1" sx={{color: "white"}}>welcome</Typography>
                    <Typography variant="h2" sx={{color: "white"}}>Browse highlighted titles from TMDB</Typography>

                    <SearchBar onClear={clearResults} value={''} onChange={handleSearch}
                               textFieldSx={{
                                   color: "black",
                                   backgroundColor: "white",
                                   height: "50px",
                                   width: "430px",
                                   borderRadius: "40px"
                               }}
                               buttonSx={{
                                   color: "white",
                                   backgroundColor: "#2563eb",
                                   height: "50px",
                                   borderRadius: "40px"
                               }}
                               onSearch={onChangeSearch}
                    />
                    </Box>
                </Box>


                <Box className={'mainTestWR'} sx={{maxWidth: '1200px', margin: '0 auto'
                }}>
                    <Box className={'testWR'}>
                        <Box sx={{
                            display: "flex", flexWrap: "nowrap", justifyContent: 'space-between',
                            marginLeft: '10px',
                            marginRight: '20px',
                            paddingTop: '20px',
                            alignItems: 'center'
                        }}>
                            <h2>Popular Movies</h2>
                            <Button
                                variant="contained"
                                href={"/movies/popular"}
                                sx={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "2px",
                                    backgroundColor: (theme) => theme.palette.mode === 'light' ? 'white' : '#27354f',
                                    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                View more
                            </Button>
                        </Box>

                        <Box sx={{display: "flex", flexWrap: "nowrap"}}>

                            {popularMovies?.results.slice(0, 6).map((movie) => (

                                <Box key={movie.id} sx={{
                                    position: "relative", margin: 1,
                                    "&:hover .favorite-btn": {opacity: 1,},
                                }}>
                                    <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                                               vote_average={movie.vote_average}
                                    />
                                </Box>
                            ))}

                        </Box>
                    </Box>

                    <Box className={'testWR'} sx={{maxWidth: '1200px',}}>
                        <Box sx={{
                            display: "flex", flexWrap: "nowrap", justifyContent: 'space-between',
                            marginLeft: '10px',
                            marginRight: '20px',
                            paddingTop: '20px',
                            alignItems: 'center',
                        }}>
                            <h2>Top Rated Movies</h2>
                            <Button
                                variant="contained"
                                href={"/movies/top-rated"}
                                sx={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "2px",
                                    backgroundColor: (theme) => theme.palette.mode === 'light' ? 'white' : '#27354f',
                                    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                View more
                            </Button>
                        </Box>


                        <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                            {topRatedMovies?.results.slice(0, 6).map((movie) => (
                                <Box key={movie.id} sx={{
                                    position: "relative", margin: 1, "&:hover .favorite-btn": {
                                        opacity: 1,
                                    },
                                }}>
                                    <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                                               vote_average={movie.vote_average}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>


                    <Box className={'testWR'} sx={{maxWidth: '1200px',}}>
                        <Box sx={{
                            display: "flex", flexWrap: "nowrap", justifyContent: 'space-between',
                            marginLeft: '10px',
                            marginRight: '20px',
                            paddingTop: '20px',
                            alignItems: 'center',
                        }}>
                            <h2>Upcoming Movies</h2>
                            <Button
                                variant="contained"
                                href={"/movies/upcoming"}
                                sx={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "2px",
                                    backgroundColor: (theme) => theme.palette.mode === 'light' ? 'white' : '#27354f',
                                    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                View more
                            </Button>
                        </Box>


                        <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                            {upcomingMovies?.results.slice(0, 6).map((movie) => (
                                <Box key={movie.id} sx={{
                                    position: "relative", margin: 1, "&:hover .favorite-btn": {
                                        opacity: 1,
                                    },
                                }}>
                                    <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                                               vote_average={movie.vote_average}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>


                    <Box className={'testWR'} sx={{maxWidth: '1200px',}}>
                        <Box sx={{
                            display: "flex", flexWrap: "nowrap", justifyContent: 'space-between',
                            marginLeft: '10px',
                            marginRight: '20px',
                            paddingTop: '20px',
                            alignItems: 'center',
                        }}>
                            <h2>Now Playing Movies</h2>
                            <Button
                                variant="contained"
                                href={"/movies/now-playing"}
                                sx={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "2px",
                                    backgroundColor: (theme) => theme.palette.mode === 'light' ? 'white' : '#27354f',
                                    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                View more
                            </Button>
                        </Box>


                        <Box sx={{display: "flex", flexWrap: "nowrap"}}>
                            {nowPlayingMovies?.results.slice(0, 6).map((movie) => (
                                <Box key={movie.id} sx={{
                                    position: "relative", margin: 1, "&:hover .favorite-btn": {
                                        opacity: 1,
                                    },
                                }}>
                                    <MovieCard movieId={movie.id} title={movie.title} posterPath={movie.poster_path}
                                               vote_average={movie.vote_average}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};