import {NavLink} from "react-router";
import "./header.css";


export const Header = () => {
    return (
        <>
            <header style={{display: "flex", alignItems: "center", gap: "10px", border: "1px solid"}}>
                <nav>
                <NavLink to={"/"}>Main</NavLink> |
                <NavLink to={"movies/popular"}>Category movies</NavLink> |
                <NavLink to={"filtered-movies"}>filtered-movies</NavLink> |
                <NavLink to={"search"}>Search</NavLink> |
                <NavLink to={"favorites"}>Favorites</NavLink>
                </nav>
            </header>
        </>
    )
}