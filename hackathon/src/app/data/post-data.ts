import { MovieData } from "./movie-data"

export interface PostData {
    user: String,
    movie: MovieData | void,
    review: String,
    rating: number
}