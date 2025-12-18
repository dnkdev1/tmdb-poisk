import {SearchBar} from "../common/searchbar/Searchbar.tsx";
import {useGetListOfPopularMoviesQuery} from "../features/api/movieApi.ts";


export const Homepage = () => {

    const {data} = useGetListOfPopularMoviesQuery();

    console.log(data?.results)

    const handleSearch = (query: string) => {
        console.log("Поиск:", query);
        // здесь можно вызвать API или фильтрацию
    };

    return (
        <>
            <h1>welcome</h1>
            <h2>Browse highlighted titles from TMDB</h2>

            <div style={{padding: "20px"}}>
                <SearchBar onSearch={handleSearch}/>
            </div>
        </>
    )
}