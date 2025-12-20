import type {FavoriteMovie} from "../components/moviecard/MovieCard.tsx";

export const setFavoriteMovieToLocalStorage = ( id: string, posterUrl: string, title: string, voteAverage: number ) => {
    const newMovie: FavoriteMovie = { id, posterUrl, title, voteAverage }
    const existing = localStorage.getItem("Favorites")
    const favorites: FavoriteMovie[] = existing ? JSON.parse(existing) : []
    favorites.push(newMovie)
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}


export const getFavoriteMoviesFromLocalStorage = (): FavoriteMovie[] => {
    const existing = localStorage.getItem("Favorites")
    return existing ? JSON.parse(existing) : []
}