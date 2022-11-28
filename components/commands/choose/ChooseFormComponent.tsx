import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
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

  function customIsInputValid(input: string): boolean {
    return input != undefined && input != '' && input.includes(',');
  }

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setChooseInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <ParamDescription
        paramName="Choose!"
        description="Option1, Option2, ..."
      />
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitStringRequest('choose', state, false, (input) =>
            customIsInputValid(input)
          );
        }}>
        <StringInputField
          stringInput={chooseInput!}
          onInput={(e) => onInput(e)}
          customIsInputValid={customIsInputValid}
          title="Choose!"
        />
      </form>
      <button
        className="btn tooltip btn-primary tooltip-primary mt-4"
        data-tip="Bless RNG"
        onClick={async () =>
          submitStringRequest('choose', state, false, (input) =>
            customIsInputValid(input)
          )
        }>
        LESS GOO!
      </button>
    </>
  );
};
