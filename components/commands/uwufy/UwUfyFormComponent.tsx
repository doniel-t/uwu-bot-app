import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import StringInputField from '../../reusable/cmdParamField/stringInputField';

export const UwUfyFormComponent: NextPage = () => {
  const [uwufied, setUwufied] = useState<StringResponse>();
  const [uwufyInput, setUwufyInput] = useState<string>();

  const state: StringInputState = {
    input: uwufyInput!,
    setInput: setUwufyInput,
    output: uwufied!,
    setOutput: setUwufied,
  };

  function onInput(e: FormEvent<HTMLElement>) {
    setUwufyInput((e.target as HTMLInputElement).value);
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            submitStringRequest('uwufy', state, true);
          }}></form>
        <ParamDescription
          paramName="UwUfy!"
          description="Sentence to UwUfy"
        />
        <div className="ml-16 flex w-full">
          <StringInputField
            stringInput={uwufyInput!}
            onInput={onInput}
            title="UwUfy!"
          />
        </div>
      </div>
      <button
        className="btn tooltip btn-primary tooltip-primary mt-4"
        data-tip="UwUfy me Daddy!!"
        onClick={async () => submitStringRequest('uwufy', state, true)}>
        LESS GOO!
      </button>
    </>
  );
};
