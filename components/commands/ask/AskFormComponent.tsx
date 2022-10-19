import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import StringInputField from '../../reusable/cmdParamField/stringInputField';

export const AskFormComponent: NextPage = () => {
  const [askResponse, setAskResponse] = useState<StringResponse>();
  const [askInput, setAskInput] = useState<string>();

  const state: StringInputState = {
    input: askInput!,
    setInput: setAskInput,
    output: askResponse!,
    setOutput: setAskResponse,
  };

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setAskInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitStringRequest('ask', state, false);
        }}>
        <StringInputField
          stringInput={askInput!}
          onInput={onInput}
          title="Ask!"
          placeholder="Ask me anything!"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Ask me for Permission!"
        onClick={async () => submitStringRequest('ask', state, false)}>
        LESS GOO!
      </button>
    </>
  );
};
