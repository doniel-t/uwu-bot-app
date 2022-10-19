import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import StringInputField from '../../reusable/cmdParamField/stringInputField';

export const ChooseFormComponent: NextPage = () => {
  const [chooseResponse, setChooseResponse] = useState<StringResponse>();
  const [chooseInput, setChooseInput] = useState<string>();

  const state: StringInputState = {
    input: chooseInput!,
    setInput: setChooseInput,
    output: chooseResponse!,
    setOutput: setChooseResponse,
  };

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setChooseInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitStringRequest('choose', state, false);
        }}>
        <StringInputField
          stringInput={chooseInput!}
          onInput={(e) => onInput(e)}
          title="Choose!"
          placeholder="Choices"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Bless RNG"
        onClick={async () => submitStringRequest('choose', state, false)}>
        LESS GOO!
      </button>
    </>
  );
};
