import {useLocation, useNavigate} from "react-router-dom";
import {useGetSearchMoviesQuery} from "../features/api/movieApi.ts";
import {Box} from "@mui/material";
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx";
import {PAGE_SIZE} from "../common/constants.ts";
import {MoviesPagination} from "../common/components/pagination/MoviesPagination.tsx";
import {useState} from "react";
import {SearchBar} from "../common/searchbar/Searchbar.tsx";

export const Search = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get("query") || ""
    const [page, setPage] = useState(1)
    const {data: searchResults} = useGetSearchMoviesQuery({query, params: {page}})

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

            <h1>Search Results</h1>


            <SearchBar onClear={clearResults} value={query} onChange={handleSearch}
                       textFieldSx={{ color: "black", backgroundColor: "white", height: "50px", width: "430px", borderRadius: "40px" }}
                       buttonSx={{color: "white", backgroundColor: "#2563eb", height: "50px", borderRadius: "40px"}}
                       onSearch={onChangeSearch}
            />



            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {searchResults?.results.map((movie) => (
                    <Box
                        key={movie.id}
                        sx={{
                            position: "relative",

                            flex: "0 0 20%", // 5 карточек в ряд
                            "&:hover .favorite-btn": { opacity: 1 },
                        }}
                    >
                        <MovieCard
                            movieId={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                            vote_average={movie.vote_average}
                        />
                    </Box>
                ))}
            </Box>


            {searchResults?.results !== undefined && searchResults.total_results > PAGE_SIZE ? (
                <MoviesPagination totalCount={searchResults?.total_results || 0} page={page} setPage={setPage} />
            ) : (
                <div></div>
            )}
        </>
    )
}