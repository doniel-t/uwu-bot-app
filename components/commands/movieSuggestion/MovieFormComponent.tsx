import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import RangeInput from '../../reusable/cmdParamField/rangeInput';
import SelectInput from '../../reusable/cmdParamField/selectInput';
import ToggleInput from '../../reusable/cmdParamField/toggleInput';
import { GENRES } from './Genres';
import { submitMovieRequest } from './movieRequest';

export const MovieFormComponent: NextPage = () => {
  const [movieSuggestionResponse, setMovieSuggestionResponse] =
    useState<StringResponse>();
  const [genreInput, setGenreInput] = useState<string>('');
  const [minScore, setMinScore] = useState<number>(40);
  const [wantTheatreMovie, setWantTheatreMovie] = useState<boolean>(false);

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitMovieRequest(genreInput, minScore, wantTheatreMovie);
        }}>
        <SelectInput
          title="Select the movie genre"
          options={GENRES}
          setValue={setGenreInput}
        />
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
        <ToggleInput
          description="Want to go to the theatre?"
          toggleValue={wantTheatreMovie}
          setToggleValue={setWantTheatreMovie}
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Are you this lonely?"
        onClick={async () =>
          submitMovieRequest(genreInput, minScore, wantTheatreMovie)
        }>
        LESS GOO!
      </button>
    </>
  );
};
