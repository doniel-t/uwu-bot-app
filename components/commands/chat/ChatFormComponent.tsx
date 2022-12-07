import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import {
  StringInputState,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import StringInputField from '../../reusable/cmdParamField/stringInputField';

export const ChatFormComponent: NextPage = () => {
  const [cleverbotAnswer, setCleverbotAnswer] = useState<StringResponse>();
  const [cleverbotInput, setCleverbotInput] = useState<string>();

  const state: StringInputState = {
    input: cleverbotInput!,
    setInput: setCleverbotInput,
    output: cleverbotAnswer!,
    setOutput: setCleverbotAnswer,
  };

  function onInput(e: FormEvent<HTMLElement>) {
    setCleverbotInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <div className="flex w-5/6 flex-col self-end p-2">
        <div className="-ml-20 self-center">
          <ParamDescription
            paramName="Chat!"
            description="Start a conversation!"
          />
        </div>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            submitStringRequest('chat', state, false);
          }}>
          <StringInputField
            stringInput={cleverbotInput!}
            onInput={onInput}
            title="Chat!"
          />
        </form>
      </div>

      <button
        className="btn tooltip btn-primary tooltip-primary mt-4 w-5/6 self-center"
        data-tip="Are you this lonely?"
        onClick={async () => submitStringRequest('chat', state, false)}>
        LESS GOO!
      </button>
    </>
  );
};
