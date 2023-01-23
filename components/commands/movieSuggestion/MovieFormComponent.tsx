import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import RangeInput from '../../reusable/cmdParamField/rangeInput';
import SelectInput from '../../reusable/cmdParamField/selectInput';
import ToggleInput from '../../reusable/cmdParamField/toggleInput';
import { GENRES } from './Genres';
import { submitMovieRequest } from './movieRequest';
import useMediaQuery from '../../../utils/hooks/isMobile';

export const MovieFormComponent: NextPage = () => {
  const [movieSuggestionResponse, setMovieSuggestionResponse] =
    useState<StringResponse>();
  const [genreInput, setGenreInput] = useState<string>('');
  const [minScore, setMinScore] = useState<number>(40);
  const [wantTheatreMovie, setWantTheatreMovie] = useState<boolean>(false);

  const isMobile = useMediaQuery(500);

  return (
    <>
      <form
        className="flex w-full flex-col items-center self-center p-2"
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitMovieRequest(genreInput, minScore, wantTheatreMovie, isMobile);
        }}>
        <SelectInput
          title="Select the movie genre"
          options={GENRES}
          setValue={setGenreInput}
        />
        <div className="divider"></div>
        <div className="mt-2 flex w-full flex-col items-center">
          <ParamDescription
            paramName="MinScore!"
            description="Lowest possible score"
          />
          <RangeInput
            minValue={0}
            maxValue={100}
            setCurrentValue={setMinScore}
            currentValue={minScore}
          />
        </div>

        <div className="w-[75%] justify-evenly">
          <ToggleInput
            description="Want to go to the theatre?"
            toggleValue={wantTheatreMovie}
            setToggleValue={setWantTheatreMovie}
          />
        </div>
      </form>
      <button
        className="btn tooltip btn-primary tooltip-primary w-5/6 self-center"
        data-tip="Grab some popcorn!"
        onClick={async () =>
          submitMovieRequest(genreInput, minScore, wantTheatreMovie, isMobile)
        }>
        LESS GOO!
      </button>
    </>
  );
};
