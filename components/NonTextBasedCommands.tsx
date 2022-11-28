import ImageColorExtraction from './commands/imageColorExtractor/ImageColorExtractor';
import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';
import TextExtraction from './commands/textExctraction/TextExtraction';

export default function NonTextBasedCommands() {
  return (
    <div className="mx-8 flex w-[32.5%] min-w-[400px] flex-wrap justify-center">
      <TextExtraction />
      <MovieSuggestion />
      <ImageColorExtraction />
    </div>
  );
}
