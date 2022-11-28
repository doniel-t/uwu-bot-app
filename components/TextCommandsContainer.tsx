import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Chat from './commands/chat/Chat';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';
import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';
import TextExtraction from './commands/textExctraction/TextExtraction';

export default function TextCommandContainer() {
  return (
    <div
      id="textCommandContainer"
      className="flex w-[57.5%] min-w-[400px] flex-wrap items-start justify-evenly">
      <UwUfy />
      <Chat />
      <Ask />
      <Choose />
      <Rng />
    </div>
  );
}
