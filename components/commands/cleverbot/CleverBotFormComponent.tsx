import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitChooseRequest } from '../choose/chooseRequest';
import { submitCleverbotRequest, isInputValid } from './cleverbotRequest';

export const CleverbotFormComponent: NextPage = () => {
  const [cleverbotAnswer, setCleverbotAnswer] = useState<StringResponse>();
  const [cleverbotInput, setCleverbotInput] = useState<string>();

  function onInput(e: FormEvent<HTMLElement>) {
    setCleverbotInput((e.target as HTMLInputElement).value);
  }
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitCleverbotRequest(cleverbotInput!, setCleverbotAnswer);
        }}>
        <StringInputField
          stringInput={cleverbotInput!}
          onInput={onInput}
          isInputValid={isInputValid}
          title="Chat!"
          placeholder="No bitches?"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Are you this lonely?"
        onClick={async () => submitChooseRequest(cleverbotInput!, setCleverbotAnswer)}>
        LESS GOO!
      </button>
    </>
  );
};
