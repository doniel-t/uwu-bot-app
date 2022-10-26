// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StringInputErrorResponse, StringResponse } from "../../types/stringCommands/stringCommandTypes";
import getAnswer from "../../utils/api/ask/getAnswer";
import { fetchMoviesByGenre, getRandomMovie } from "../../utils/api/movieSuggestions/movieSuggestion";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<StringResponse | StringInputErrorResponse>
) {
    const genre = req.query.genre;
    const minScore = req.query.minScore;
    const isInTheatre = req.query.isInTheatre;
    if (!genre) {
        res.status(400).json({ error: "invalid genre parameter!" });
        return;
    }
    if (!minScore) {
        res.status(400).json({ error: "invalid minScore parameter!" });
        return;
    }
    if (!isInTheatre) {
        res.status(400).json({ error: "invalid isInTheatre parameter!" });
        return;
    }

    try {
        const fetchedMovies = await fetchMoviesByGenre((genre as string).toLowerCase(), Number(minScore), isInTheatre === 'true');
        console.log(fetchedMovies)
        if (fetchedMovies.length === 0) {
            res.status(200).json({ content: "Nothing was found 🤡" })
            return;
        }
        const suggestedMovie = getRandomMovie(fetchedMovies);
        res.status(200).json({ content: `${suggestedMovie.name}; score: ${suggestedMovie.score}` });
    } catch (e) {
        console.error(e)
        res.status(400).json({ error: "Something went wrong" })
    }

}
