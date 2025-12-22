import {z} from "zod"

export const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
}).strict();
export type Movie = z.infer<typeof MovieSchema>




export const ListOfMoviesResponseSchema = z.object({
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
})
export type ListOfMoviesResponse = z.infer<typeof ListOfMoviesResponseSchema>






export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
})
export type Genre = z.infer<typeof GenreSchema>










export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
});
export type ProductionCompany = z.infer<typeof ProductionCompanySchema>










export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
})
export type ProductionCountry = z.infer<typeof ProductionCountrySchema>







export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})
export type SpokenLanguage = z.infer<typeof SpokenLanguageSchema>











export const DetailOfMovieResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: z.unknown().nullable(),
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string().nullable(),
    id: z.number(),
    imdb_id: z.string().nullable(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export type DetailOfMovieResponse = z.infer<typeof DetailOfMovieResponseSchema>















export const CastMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
})

export type CastMember = z.infer<typeof CastMemberSchema>










export const MovieCastResponseSchema = z.object({
    id: z.number(),
    cast: z.array(CastMemberSchema),
})

export type MovieCastResponse = z.infer<typeof MovieCastResponseSchema>
















export const GenresResponseSchema = z.object({
    genres: z.array(GenreSchema),
})

export type GenresResponse = z.infer<typeof GenresResponseSchema>


