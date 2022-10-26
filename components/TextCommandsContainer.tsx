import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Chat from './commands/chat/Chat';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';
import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';

export default function TextCommandContainer() {
  return (
    <div
      id="textCommandContainer"
      className="flex flex-wrap justify-evenly items-start">
      <UwUfy />
      <Ask />
      <Choose />
      <Rng />
      <MovieSuggestion />
      <Chat />
    </div>
  );
}
