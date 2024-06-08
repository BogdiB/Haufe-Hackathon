import { MovieData } from "./movie-data"

export interface PostData {
    user: String,
    movie: MovieData,
    review: String,
    rating: number
}