import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitAskRequest, isInputValid } from './askRequest';

export const AskFormComponent: NextPage = () => {
  const [askResponse, setAskResponse] = useState<StringResponse>();
  const [askInput, setAskInput] = useState<string>();

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setAskInput((e.target as HTMLInputElement).value);
  }
  
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitAskRequest(askInput!, setAskResponse);
        }}>
        <StringInputField
          stringInput={askInput!}
          isInputValid={isInputValid}
          onInput={onInput}
          title="Ask!"
          placeholder="Ask me anything!"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Ask me for Permission!"
        onClick={async () => submitAskRequest(askInput!, setAskResponse)}>
        LESS GOO!
      </button>
    </>
  );
};
