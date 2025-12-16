import './App.css'
import {NavLink, Route, Routes} from "react-router";


const Homepage = () => {
    return (
        <>
            <h1>welcome</h1>
        </>
    )
}


const Popular = () => {
    return (
        <>
            <div style={{display: "flex", alignItems: "center", gap: "10px", border: "1px solid"}}>
                <NavLink to={"movies/popular"}>Popular Movies</NavLink>
                <NavLink to={"products"}>Top Rated Movies</NavLink>
                <NavLink to={"products"}>Upcoming Movies</NavLink>
                <NavLink to={"products"}>Now Playing Movies</NavLink>
            </div>
        </>
    )
}

const Filteredmovies = () => {
    return (
        <>
            <h1>filtered-movies</h1>
        </>
    )
}

const Search = () => {
    return (
        <>
            <h1>Search Results</h1>
        </>
    )
}

const Favorites = () => {
    return (
        <>
            <h1>Favorites</h1>
        </>
    )
}


function App() {

    return (
        <>
            <header style={{display: "flex", alignItems: "center", gap: "10px", border: "1px solid"}}>
                <NavLink to={"/"}>Main</NavLink>
                <NavLink to={"movies/popular"}>Category movies</NavLink>
                <NavLink to={"filtered-movies"}>filtered-movies</NavLink>
                <NavLink to={"search"}>Search</NavLink>
                <NavLink to={"favorites"}>Favorites</NavLink>
            </header>

            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/movies/popular"} element={<Popular/>}/>
                <Route path={"/filtered-movies"} element={<Filteredmovies/>}/>
                <Route path={"/search"} element={<Search/>}/>
                <Route path={"/favorites"} element={<Favorites/>}/>
            </Routes>
        </>
    )
}

export default App
