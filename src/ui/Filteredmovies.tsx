import {useGetDiscoverMovieMoviesQuery, useGetGenreListMoviesQuery} from "../features/api/movieApi.ts"
import {Box, Button, FormControl, MenuItem, Select, type SelectChangeEvent, Slider} from "@mui/material"
import {useState} from "react"
import {PAGE_SIZE} from "../common/constants.ts"
import {MoviesPagination} from "../common/components/pagination/MoviesPagination.tsx"
import {MovieCard} from "../common/components/moviecard/MovieCard.tsx"
import {useAppSelector} from "../common/hooks/useAppSelector.ts"
import {selectThemeMode} from "../app/app-slice.ts"
import {getTheme} from "../common/theme/theme.ts"


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
            <Box className={'mainfilterWR'} sx={{
                alignItems: "flex-start",
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: "row",
                gap: 2,
                paddingTop: '30px',
            }}>

                {/* Левая колонка */}

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    backgroundColor: theme.palette.mode === "light" ? "#f3f4f6" : "#141c2c",
                    borderRadius: '20px',
                    width: '294px',
                    flexShrink: 0,
                    padding: '24px',
                }}>
                    <h3>Filters / Sort</h3>

                    {/* Select */}
                    <Box
                        className={'selectWR'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            width: '100%',
                            gap: 1,
                        }}
                    >
                        Sort by
                        <FormControl sx={{flex: 1}}>
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
                    </Box>


                    {/* Slider */}
                    <Box sx={{width: "246px", height: "61px"}}>

                        <Box className={'wrapper-ratingWR'} sx={{ alignItems:'center' ,width: '100%', display: 'flex' ,justifyContent: 'space-between'}}>
                            <span>Rating</span>
                            <span>{value[0].toFixed(1)} – {value[1].toFixed(1)}</span>
                        </Box>

                        <Slider
                            value={value}
                            onChange={handleRatingChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={10}
                            step={0.1}
                            valueLabelFormat={(val) => val.toFixed(1)}
                            sx={{
                                color: '#2563eb', // основной цвет слайдера
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#fff', // цвет "ползунка"
                                    border: '2px solid #2563eb',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#2563eb', // цвет активной линии
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#ccc', // цвет неактивной линии
                                },
                            }}


                        />

                    </Box>


                    {/* Кнопки жанров */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 1,
                            justifyItems: 'start',
                            alignItems: "start",


                        }}
                    >
                        {genreMovieList?.genres.map((movie) => (




                            <Button
                                key={movie.id}
                                variant="contained"
                                onClick={() => toggleGenre(movie.id)}
                                sx={{
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "5px 12px",
                                    minWidth: "auto",
                                    width: "auto",
                                    backgroundColor: (theme) =>
                                        activeGenres.includes(movie.id)
                                            ? "#2563eb"
                                            : theme.palette.mode === "light"
                                                ? "white"
                                                : "#324061",
                                    color: (theme) =>
                                        activeGenres.includes(movie.id)
                                            ? "white"
                                            : theme.palette.mode === "light"
                                                ? "black"
                                                : "white",
                                    whiteSpace: "nowrap",
                                    wordBreak: "normal",
                                }}
                            >
                                {movie.name}
                            </Button>
                        ))}


                        <Button

                            variant="contained"
                            onClick={resetFiltersHandler}
                            sx={{
                                height: "35px",

                                borderRadius: "20px",
                                textTransform: "none",

                                backgroundColor: '#2563eb',
                                color: 'white',
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                                padding: "5px 12px",
                                minWidth: "auto",
                                width: "auto",
                            }}
                        >
                            Reset filters
                        </Button>


                    </Box>
                </Box>


                {/* Правая колонка */}

                <Box sx={{display: "flex", flexWrap: "wrap", maxWidth: '882px', flexGrow: 1}}>
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


        </>
    )
}