import {useGetDiscoverMovieMoviesQuery, useGetGenreListMoviesQuery} from "../features/api/movieApi.ts";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    type SelectChangeEvent,
    Slider,
    Typography
} from "@mui/material";
import {useState} from "react";
import {PAGE_SIZE} from "../common/constants.ts";
import {MoviesPagination} from "../common/components/pagination/MoviesPagination.tsx";
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "../app/app-slice.ts";
import {getTheme} from "../common/theme/theme.ts";


export const Filteredmovies = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)


    const sortsOptions = [
        {value: 'Popularity ↓', sortby: 'popularity.desc'},
        {value: 'Popularity ↑', sortby: 'popularity.asc'},
        {value: 'Rating ↓', sortby: 'vote_average.desc'},
        {value: 'Rating ↑', sortby: 'vote_average.asc'},
        {value: 'Release Date ↓', sortby: 'primary_release_date.desc'},
        {value: 'Release Date ↑', sortby: 'primary_release_date.asc'},
        {value: 'Title A-Z', sortby: 'original_title.asc'},
        {value: 'Title Z-A', sortby: 'original_title.desc'}
    ]


    const [page, setPage] = useState(1)
    const [value, setValue] = useState([0.0, 10.0])                       // slider
    const [sortSelect, setSortSelect] = useState(sortsOptions[0].sortby)  //select
    const [activeGenres, setActiveGenres] = useState<number[]>([])       ///genres buttons array

    const {data: genreMovieList} = useGetGenreListMoviesQuery()
    const {data: discoverMovies} = useGetDiscoverMovieMoviesQuery(
        {
            params: {
                sort_by: sortSelect,
                "vote_average.gte": value[0],
                "vote_average.lte": value[1],
                with_genres: activeGenres,
                page: page
            }
        })

    console.log(discoverMovies?.results)

    const toggleGenre = (id: number) => {
        setActiveGenres((prev) =>
            prev.includes(id) ? prev.filter((genreId) => genreId !== id) : [...prev, id]
        )

    }

    const resetFiltersHandler = () => {
        setValue([0.0, 10.0])
        setSortSelect(sortsOptions[0].sortby)
        setActiveGenres([])

    }


    const handleSortChange = (event: SelectChangeEvent) => {
        setSortSelect(event.target.value)
    }


    activeGenres.map((el) => (
        console.log(el)
    ))


    const handleRatingChange = (_event: Event, newValue: number[]) => {
        setValue(newValue);
    }


    return (


        <>

            <Grid container spacing={2} wrap="nowrap">
                {/* Левая колонка */}
                <Grid item sx={{width: '1200px', paddingX: '30px', paddingTop: '20px'}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        backgroundColor: theme.palette.mode === "light" ? "#f3f4f6" : "#141c2c"
                    }}>
                        <h3>Filters / Sort</h3>

                        {/* Select */}
                        <FormControl fullWidth>
                            <InputLabel id="genre-select-label">Жанр</InputLabel>
                            <Select
                                labelId="genre-select-label"
                                id="genre-select"
                                value={sortSelect}
                                onChange={handleSortChange}
                            >
                                {sortsOptions?.map((option) => (
                                    <MenuItem key={option.value} value={option.sortby}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Slider */}
                        <Box sx={{width: "200px"}}>
                            <Typography gutterBottom>Диапазон</Typography>
                            <Slider
                                value={value}
                                onChange={handleRatingChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={10}
                                step={0.1}
                                valueLabelFormat={(val) => val.toFixed(1)}
                            />
                            <Typography>
                                Выбранный диапазон: {value[0].toFixed(1)} – {value[1].toFixed(1)}
                            </Typography>
                        </Box>

                        {/* Кнопки жанров */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 1,
                            }}
                        >
                            {genreMovieList?.genres.map((movie) => (
                                <Button
                                    key={movie.id}
                                    variant="contained"
                                    onClick={() => toggleGenre(movie.id)}
                                    sx={{
                                        borderRadius: "50px",
                                        textTransform: "none",
                                        padding: "5px 12px",
                                        backgroundColor: (theme) =>
                                            activeGenres.includes(movie.id)
                                                ? theme.palette.primary.main
                                                : theme.palette.mode === "light"
                                                    ? "white"
                                                    : "#324061",
                                        color: (theme) =>
                                            activeGenres.includes(movie.id)
                                                ? "white"
                                                : theme.palette.mode === "light"
                                                    ? "black"
                                                    : "white",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {movie.name}
                                </Button>
                            ))}


                            <Button

                                variant="contained"
                                onClick={resetFiltersHandler}
                                sx={{
                                    borderRadius: "50px",
                                    textTransform: "none",
                                    padding: "5px 12px",
                                    backgroundColor: '#2563eb',
                                    color: 'white',
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                Reset filters
                            </Button>


                        </Box>
                    </Box>
                </Grid>

                                                                     {/* Правая колонка */}
                <Grid item xs>
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        {discoverMovies?.results.map((movie) => (
                            <Box
                                key={movie.id}
                                sx={{
                                    flex: "1 0 18%",
                                    margin: 1,
                                    position: "relative",
                                    "&:hover .favorite-btn": {opacity: 1},
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

                    {discoverMovies?.results !== undefined &&
                    discoverMovies.total_results > PAGE_SIZE ? (
                        <MoviesPagination
                            totalCount={discoverMovies?.total_results || 0}
                            page={page}
                            setPage={setPage}
                        />
                    ) : (
                        <div></div>
                    )}
                </Grid>
            </Grid>
        </>
    )
}