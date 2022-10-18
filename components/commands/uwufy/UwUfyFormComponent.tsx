import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitUwUfyRequest, isInputValid } from './uwufyRequest';

export const UwUfyFormComponent: NextPage = () => {
  const [uwufied, setUwufied] = useState<StringResponse>();
  const [uwufyInput, setUwufyInput] = useState<string>();

  function onInput(e: FormEvent<HTMLElement>) {
    setUwufyInput((e.target as HTMLInputElement).value);
  }
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitUwUfyRequest(uwufyInput!, setUwufied);
        }}>
        <StringInputField
          stringInput={uwufyInput!}
          onInput={onInput}
          isInputValid={isInputValid}
          title="UwUfy!"
          placeholder="UwUfy me!"
        />
      </form>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="UwUfy me Daddy!!"
        onClick={async () => submitUwUfyRequest(uwufyInput!, setUwufied)}>
        LESS GOO!
      </button>
    </>
  );
};
