import { notifyError, notifyCopyToClipboard, notifyLoading, notifyUpdate } from "../../../utils/libs/notify";
import { GENRES } from "./Genres";

export async function submitMovieRequest(genre: string, minScore: number, isInTheatre: boolean) {
    if (!isValid(genre)) {
        notifyError(`GENRE`);
        return;
    }

    const toastId = notifyLoading();
    const response = await fetch(`/api/movieSuggestion?` + new URLSearchParams({
        genre: genre,
        minScore: `${minScore}`,
        isInTheatre: `${isInTheatre}`
    }));
    const data = await response.json();

    if (!data?.content) {
        notifyUpdate(toastId, 'error');
        return;
    }

    if (navigator && !data.content?.includes("Nothing was found")) {
        navigator.clipboard.writeText(data.content);
        notifyCopyToClipboard()
    }

    notifyUpdate(toastId, 'success', data.content);
}

function isValid(genre: string) {
    return genre != "" && genre != undefined && GENRES.includes(genre.toLowerCase())
}
