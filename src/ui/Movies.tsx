import {NavLink} from "react-router";

export const Movies = () => {
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