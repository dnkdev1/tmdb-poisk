import {SearchBar} from "../common/searchbar/Searchbar.tsx"
import {Box, Button, Typography, useMediaQuery} from "@mui/material"
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
} from "../features/api/movieApi.ts"
import {useState} from "react"
import {useNavigate} from "react-router"
import {MoviesList} from "../common/header/movielist/MovieList.tsx";


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

    const isMobileResolution = useMediaQuery("(max-width:1024px)")


    return (
        <>
            <Box className={'testWRAPPER'}>
                <Box sx={{
                    width: "100vw", height: "700px", backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", pl: 4,
                    justifyContent: "center", flexDirection: "column",
                }}>

                    <Box className={'searchWR'} sx={{
                        width: {
                            xs: "100%",
                            sm: "600px",
                            md: "800px",
                            lg: "1200px",
                        },
                        // paddingRight: "24px",
                        px: "14px",
                    }}
                    >
                        <Typography variant="h3" sx={{
                            color: "white",
                            paddingBottom: '10px',
                            fontFamily: 'Helvetica',
                            fontWeight: '800'
                        }}>WELCOME</Typography>
                        <Typography variant="h6" sx={{color: "white", paddingBottom: '20px'}}>Browse highlighted titles
                            from TMDB</Typography>

                        <SearchBar
                            onClear={clearResults}
                            value={''}
                            onChange={handleSearch}
                            buttonSx={{
                                color: "white",
                                backgroundColor: "#2563eb",
                                height: "50px",
                                borderRadius: "40px",
                            }}
                            onSearch={onChangeSearch}
                        />

                    </Box>
                </Box>


                <Box className={'mainTestWR'} sx={{
                    maxWidth: '1200px', margin: '0 auto'
                }}>
                    <Box className={'testWR'} sx={{px: "14px",}}>
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
                                href={"movies/popular"}
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
                            {popularMovies &&
                                <MoviesList movieList={popularMovies} isMobileResolution={isMobileResolution}/>
                            }
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
                            {topRatedMovies &&
                                <MoviesList movieList={topRatedMovies} isMobileResolution={isMobileResolution}/>
                            }
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
                            {upcomingMovies &&
                                <MoviesList movieList={upcomingMovies} isMobileResolution={isMobileResolution}/>
                            }
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
                            {nowPlayingMovies &&
                                <MoviesList movieList={nowPlayingMovies} isMobileResolution={isMobileResolution}/>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};