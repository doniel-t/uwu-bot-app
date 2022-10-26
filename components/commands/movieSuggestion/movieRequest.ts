import { notifyError, notifyCopyToClipboard, notifySucces } from "../../../utils/libs/notify";
import { GENRES } from "./Genres";

export async function submitMovieRequest(genre: string, minScore: number, isInTheatre: boolean) {
    console.log({ genre, minScore, isInTheatre })

    if (!isValid(genre)) {
        notifyError(`GENRE`);
        return;
    }

    const response = await fetch(`/api/movieSuggestion?` + new URLSearchParams({
        genre: genre,
        minScore: `${minScore}`,
        isInTheatre: `${isInTheatre}`
    }));
    const data = await response.json();

    if (navigator && !data.content.includes("Nothing was found")) {
        navigator.clipboard.writeText(data.content);
        notifyCopyToClipboard()
    }

    notifySucces(`🥱 ${data.content}`);
}

function isValid(genre: string) {
    return genre != "" && genre != undefined && GENRES.includes(genre.toLowerCase())
}
