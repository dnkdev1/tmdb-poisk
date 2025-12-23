export const AUTH_TOKEN = "auth-token"
export const PAGE_SIZE = 20

export const PATH = {
    HOMEPAGE: '/',
    POPULAR_MOVIES: '/movies/popular',
    TOP_RATED_MOVIES: 'movies/top-rated',
    UPCOMING_MOVIES: '/movies/upcoming',
    NOW_PLAYING_MOVIES: '/movies/now-playing',
    FILTRED_MOVIES: '/filtered-movies',
    SEARCH: '/search',
    FAVORITES: '/favorites',
    MOVIE: '/movie/:id',
    ERROR: '/*',
} as const