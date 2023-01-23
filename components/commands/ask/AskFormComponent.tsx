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

export const AskFormComponent: NextPage = () => {
  const [askResponse, setAskResponse] = useState<StringResponse>();
  const [askInput, setAskInput] = useState<string>();

  const isMobile = useMediaQuery(500);

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
      <div className="flex w-5/6 flex-col self-end p-2">
        <div className="-ml-20 self-center">
          <ParamDescription
            paramName="Ask"
            description="Question you want to ask"
          />
        </div>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            submitStringRequest('ask', state, false, {isMobile});
          }}></form>
        <StringInputField
          stringInput={askInput!}
          onInput={onInput}
          title="Ask!"
        />
      </div>

      <button
        className="btn tooltip btn-primary tooltip-primary mt-4 w-5/6 self-center"
        data-tip="Ask me for Permission!"
        onClick={async () => submitStringRequest('ask', state, false, {isMobile})}>
        LESS GOO!
      </button>
    </>
  );
};
