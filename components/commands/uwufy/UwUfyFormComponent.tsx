import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
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
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitStringRequest('uwufy', state, true);
        }}>
        <StringInputField
          stringInput={uwufyInput!}
          onInput={onInput}
          title="UwUfy!"
          placeholder="UwUfy me!"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="UwUfy me Daddy!!"
        onClick={async () => submitStringRequest('uwufy', state, true)}>
        LESS GOO!
      </button>
    </>
  );
};
