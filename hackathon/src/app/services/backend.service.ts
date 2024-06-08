import { MovieData } from "../data/movie-data";
import { PostData } from "../data/post-data";

const apiURL: String = "http://localhost:5000";

export function getRecentPosts(page: number, howMany: number): Promise<PostData[] | void> {
    if (page < 1) {
        page = 1;
    }
    
    // the "howMany" variable will be bound-checked on the backend

    let movieData: MovieData = {id: 0, title: "Damn", googleImageLink: "https://upload.wikimedia.org/wikipedia/en/4/4e/Mayor_of_Kingstown_poster.jpg", imdbLink: "https://www.imdb.com/title/tt11712058/?ref_=nv_sr_srsg_0_tt_5_nm_3_q_mayor%2520of%2520k"};
    // let data: PostData = {user: "Someone", movie: movieData, review: "Decent", rating: 3};
    return fetch(apiURL + "/posts?page=" + page + "&howMany=" + howMany, {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(async data => {
            let objects = JSON.parse(JSON.stringify(data));
            let finalObject: PostData;
            let array: PostData[] = [];
            for (let object of objects)
            {                
                finalObject = {
                    user: object.user,
                    movie: await getMovie(Number(object.movieID))
                    .then(response => {
                        return JSON.parse(JSON.stringify(response)) as MovieData;
                    })
                    .catch(error => {
                        console.error('Error: ', error);
                    }),
                    review: object.review,
                    rating: object.rating
                };
                array.push(finalObject);
            }
            return array;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export function getNumberOfPages(postsPerPage: number): number {
    return 1;
}

export function getMovieNames(): Promise<String[] | void> {
    return fetch(apiURL + "/movies", {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return JSON.parse(data) as String[];
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export function getMovie(id: number): Promise<MovieData | void> {
    return fetch(apiURL + "/movie?id=" + id, {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return JSON.parse(JSON.stringify(data)) as MovieData;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export function login(user: String, password: String): Promise<boolean | void> {
    return fetch(apiURL + "/login?user=" + user + "&password=" + password, {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return JSON.parse(data) as boolean;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}