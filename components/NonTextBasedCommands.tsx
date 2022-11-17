import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';
import TextExtraction from './commands/textExctraction/TextExtraction';

export default function NonTextBasedCommands() {
  return (
    <div className="flex flex-wrap justify-center w-[32.5%] min-w-[400px] mx-8">
      <TextExtraction />
      <MovieSuggestion />
    </div>
  );
}
