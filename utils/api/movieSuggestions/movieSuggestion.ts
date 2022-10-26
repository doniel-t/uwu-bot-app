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
    wantTheatreMovies: boolean | undefined
): Promise<Movie[]> {
    const movieType = wantTheatreMovies ? movieTypes.theatre : movieTypes.home;
    const genreBasedURL = `${BASE_URL}${movieType}/genres:${genre}~sort:popular?page=${5}`;
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

    if (movies.length == 0) movies.push({ name: "Nothing found", score: 0 });
    return movies;
}

export function getRandomMovie(movieList: Movie[]): Movie {
    let randIndex = Math.floor(Math.random() * movieList.length - 1);
    let randMovie = movieList[randIndex];
    return randMovie;
}