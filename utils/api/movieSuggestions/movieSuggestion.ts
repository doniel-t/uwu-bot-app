import { getScore, getMovieName } from "./parseHTML";

export type Movie = {
    name: string;
    score: number;
};

const movieTypes = {
    theatre: "movies_in_theaters",
    home: "movies_at_home",
};

const BASE_URL = "https://www.rottentomatoes.com/browse/";

export async function fetchMoviesByGenre(
    genre: string,
    minRating: number,
    wantTheatreMovies: boolean
): Promise<Movie[]> {
    const movieType = wantTheatreMovies ? movieTypes.theatre : movieTypes.home;
    const genreBasedURL = `${BASE_URL}${movieType}/genres:${genre}~sort:popular?page=${5}`;
    console.log(genreBasedURL)
    const page = await fetch(genreBasedURL);
    const pageString = await page.text();
    const movies = getMoviesByRating(pageString, minRating);
    return movies;
}

export function getMoviesByRating(
    htmlBody: string,
    minRating: number
): Movie[] {
    const movieSplits = htmlBody.split('href="/m/');
    const movies: Movie[] = [];
    movieSplits.forEach((movieSplit: string) => {
        const score = getScore(movieSplit);
        if (score < minRating || Number.isNaN(score)) {
            return;
        }
        const movie = {
            name: getMovieName(movieSplit),
            score: score,
        };
        movies.push(movie);
    });
    return movies;
}

export function getRandomMovie(movieList: Movie[]): Movie {
    const randIndex = Math.floor(Math.random() * movieList.length - 1);
    return movieList[randIndex];
}