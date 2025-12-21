import type {FavoriteMovie} from "../components/moviecard/MovieCard.tsx";

export const manageFavoriteMovieToLocalStorage = (id: string, posterUrl: string, title: string, voteAverage: number ) => {




    const newMovie: FavoriteMovie = { id, posterUrl, title, voteAverage }
    const existing = localStorage.getItem("Favorites")
    const favorites: FavoriteMovie[] = existing ? JSON.parse(existing) : []

    const searchSameValues = favorites.find((movie) => {return  movie.id === id})

     if(searchSameValues === undefined){
         favorites.push(newMovie)
         localStorage.setItem("Favorites", JSON.stringify(favorites))
     }else{
         const updatedFavorites = favorites.filter(movie => movie.id !== id)
         localStorage.setItem("Favorites", JSON.stringify(updatedFavorites))
     }




}


export const getFavoriteMoviesFromLocalStorage = (): FavoriteMovie[] => {
    const existing = localStorage.getItem("Favorites")
    return existing ? JSON.parse(existing) : []
}