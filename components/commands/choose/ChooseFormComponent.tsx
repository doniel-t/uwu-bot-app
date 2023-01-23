import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import useMediaQuery from '../../../utils/hooks/isMobile';

export const ChooseFormComponent: NextPage = () => {
  const [chooseResponse, setChooseResponse] = useState<StringResponse>();
  const [chooseInput, setChooseInput] = useState<string>();

  const isMobile = useMediaQuery(500);

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
      <div className="flex w-5/6 flex-col self-end p-2">
        <div className="-ml-20 self-center">
          <ParamDescription
            paramName="Choose!"
            description="Option1, Option2, ..."
          />
        </div>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            const isInputValid = () => customIsInputValid(state.input);
            submitStringRequest('choose', state, false, {isMobile: isMobile, customIsInputValid: isInputValid}
            );
          }}>
          <StringInputField
            stringInput={chooseInput!}
            onInput={(e) => onInput(e)}
            customIsInputValid={customIsInputValid}
            title="Choose!"
          />
        </form>
      </div>
      <button
        className="btn tooltip btn-primary tooltip-primary mt-4 w-5/6 self-center"
        data-tip="Bless RNG"
        onClick={async () =>{
          const isInputValid = () => customIsInputValid(state.input);
          submitStringRequest('choose', state, false, {isMobile: isMobile, customIsInputValid: isInputValid}
          )}
        }>
        LESS GOO!
      </button>{' '}
    </>
  );
};
