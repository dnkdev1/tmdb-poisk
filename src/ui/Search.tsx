import {useLocation, useNavigate} from "react-router"
import {useGetSearchMoviesQuery} from "../features/api/movieApi.ts"
import {Box, Skeleton, Typography} from "@mui/material"
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx"
import {PAGE_SIZE} from "../common/constants.ts"
import {MoviesPagination} from "../common/components/pagination/MoviesPagination.tsx"
import {useState} from "react"
import {SearchBar} from "../common/searchbar/Searchbar.tsx"



export const Search = () => {


    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get("query") || ""
    const [page, setPage] = useState(1)
    const {data: searchResults, isLoading} = useGetSearchMoviesQuery({query, params: {page}})

    const onChangeSearch = (value: string) => {
        navigate(`/search?query=${encodeURIComponent(value)}`)
    }


    const handleSearch = (value: string) => {
        console.log(search)
        setSearch(value)

    }

    const clearResults = () => {
        setSearch("")
        navigate("/search")
    }

    return (
        <>
            <Box className={'mainsearchWR'} sx={{alignItems: "center", maxWidth: '1200px', margin: '0 auto'}}>

                <Box sx={{paddingTop: "20px", paddingLeft: "10px", paddingBottom: "30px"}}>

                    <Typography variant={"h5"} sx={{paddingBottom: "30px"}}>Search Results</Typography>

                    <SearchBar
                        onClear={clearResults}
                        value={query}
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

                <Box
                    sx={{
                        paddingLeft: "15px",
                        display: "flex",
                        flexWrap: "wrap",
                        minHeight: "300px",

                        alignItems: searchResults?.results?.length ? "flex-start" : "flex-start",
                        justifyContent: searchResults?.results?.length ? "flex-start" : "flex-start",
                    }}
                >


                    {isLoading && query ? (

                        Array.from(new Array(20)).map((_, index) => (
                            <Box
                                key={index}
                                sx={{ flex: "1 0 18%", margin: 1 }}
                            >
                                <Skeleton
                                    variant="rectangular"
                                    width={189}
                                    height={270}
                                    sx={{ borderRadius: "15px" }}
                                />
                                <Skeleton variant="text" width={180} sx={{ mt: 1 }} />
                                <Skeleton variant="text" width={180} />
                            </Box>
                        ))
                    ) : searchResults?.results?.length ? (
                        searchResults.results.map((movie) => (
                            <Box
                                key={movie.id}
                                sx={{
                                    position: "relative",
                                    flex: "0 0 20%",
                                    "&:hover .favorite-btn": { opacity: 1 },
                                }}
                            >
                                <MovieCard
                                    movieId={movie.id}
                                    title={movie.title}
                                    posterPath={movie.poster_path ?? ""}
                                    vote_average={movie.vote_average}
                                />
                            </Box>
                        ))
                    ) : params.size === 0 ? (
                        <Typography variant="h6" color="text.secondary">
                            Enter a title to start searching.
                        </Typography>
                    ) : (
                        <Box display="flex" flexDirection="column">
                            <Typography
                                sx={{ fontWeight: "bold" }}
                                variant="h6"
                                color="text.secondary"
                                display="block"
                                paddingBottom={"20px"}
                            >
                                Results for "{query}"
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" display="block">
                                No matches found for
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" display="block">
                                "{query}"
                            </Typography>
                        </Box>
                    )}


                </Box>

            </Box>

            {searchResults?.results !== undefined && searchResults.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={searchResults?.total_results || 0} page={page} setPage={setPage}/>
            ) : (
                <div></div>
            )}

        </>
    )
}