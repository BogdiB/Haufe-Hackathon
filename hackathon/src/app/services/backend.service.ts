import { PostData } from "../data/post-data";

const apiPath: String = "";

export function getRecentPosts(page: number, howMany: number): PostData[] {
    if (page < 1) {
        page = 1;
    }
    // the "howMany" variable will be bound-checked on the backend
    return [];
}

export function getNumberOfPages(postsPerPage: number): number {
    return 0;
}