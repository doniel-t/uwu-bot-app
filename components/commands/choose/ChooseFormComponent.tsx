import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitChooseRequest, isInputValid } from './chooseRequest';

export const ChooseFormComponent: NextPage = () => {
  const [chooseResponse, setChooseResponse] = useState<StringResponse>();
  const [chooseInput, setChooseInput] = useState<string>();

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setChooseInput((e.target as HTMLInputElement).value);
  }
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitChooseRequest(chooseInput!, setChooseResponse);
        }}>
        <StringInputField
          stringInput={chooseInput!}
          isInputValid={isInputValid}
          onInput={(e) => onInput(e)}
          title="Choose!"
          placeholder="Choices"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Bless RNG"
        onClick={async () => submitChooseRequest(chooseInput!, setChooseResponse)}>
        LESS GOO!
      </button>
    </>
  );
};
