import { MovieData } from "../data/movie-data";
import { PostData } from "../data/post-data";

const apiPath: String = "localhost:5000";

export function getRecentPosts(page: number, howMany: number): PostData[] {
    if (page < 1) {
        page = 1;
    }
    
    // the "howMany" variable will be bound-checked on the backend

    let movieData: MovieData = {id: 0, title: "Damn", googleImageLink: "https://upload.wikimedia.org/wikipedia/en/4/4e/Mayor_of_Kingstown_poster.jpg", imdbLink: "https://www.imdb.com/title/tt11712058/?ref_=nv_sr_srsg_0_tt_5_nm_3_q_mayor%2520of%2520k"};
    let data: PostData = {user: "Someone", movie: movieData, review: "Decent", rating: 3};
    return [data];
}

export function getNumberOfPages(postsPerPage: number): number {
    return 0;
}

export function getAvailableMovieNames(): String[] {
    return [];
}