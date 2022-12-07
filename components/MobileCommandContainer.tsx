import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Chat from './commands/chat/Chat';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';
import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';
import TextExtraction from './commands/textExctraction/TextExtraction';
import ImageColorExtraction from './commands/imageColorExtractor/ImageColorExtractor';

export default function MobileCommandContainer() {
  return (
    <div
      id="textCommandContainer"
      className="flex flex-wrap items-center justify-around">
      <UwUfy />
      <Chat />
      <Ask />
      <Choose />
      <Rng />
      <TextExtraction />
      <MovieSuggestion />
      <ImageColorExtraction />
    </div>
  );
}
