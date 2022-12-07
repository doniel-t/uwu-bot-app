import { NextPage } from 'next/types';
import React from 'react';
import ImageColorExtraction from './commands/imageColorExtractor/ImageColorExtractor';
import MovieSuggestion from './commands/movieSuggestion/MovieSuggestion';
import TextExtraction from './commands/textExctraction/TextExtraction';

const NonTextBasedCommands = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="nonTextCommandContainer"
        className="my-4 mx-2 flex h-full w-full flex-grow flex-col">
        <div className="ml-24 mt-6 h-32 w-5/6 flex-row items-center justify-center">
          <p className="my-2 flex flex-auto font-semibold text-primary">
            Hello Gamer!
          </p>
          <h1 className="flex flex-auto text-5xl font-bold">
            Welcome to Based Commands!
          </h1>
        </div>

        <div className="self-strech ml-12 mt-12 inline-flex w-[85%] rounded-3xl bg-[#313344]">
          <div className="self-strech inline-flex flex-wrap justify-evenly">
            <div className="flex w-full justify-center">
              <TextExtraction />
            </div>
            <MovieSuggestion />
            <ImageColorExtraction />
          </div>
        </div>
      </div>
    );
  }
);
export default NonTextBasedCommands;
