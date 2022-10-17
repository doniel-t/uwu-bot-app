import React, { FormEvent } from 'react';
import { useState } from 'react';
import {
  StringCommandParams,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { notifyError, notifySucces } from '../../reusable/cmdParamField/utils';

export default function Cleverbot() {
  const [cleverbotAnswer, setCleverbotAnswer] = useState<StringResponse>();
  const [cleverbotInput, setCleverbotInput] = useState<string>();

  function isInputValid(): boolean {
    return cleverbotInput != undefined && cleverbotInput != '';
  }

  function onInput(e: FormEvent<HTMLElement>) {
    setCleverbotInput((e.target as HTMLInputElement).value);
  }

  async function submitUwUfyRequest() {
    const params: StringCommandParams = {
      input: cleverbotInput as string,
    };

    if (!isInputValid()) {
      notifyError('Chat');
      return;
    }

    const response = await fetch('/api/cleverbot?' + new URLSearchParams(params));
    const data = await response.json();
    console.log(data);
    setCleverbotAnswer(data.content);
    notifySucces(data.content);
  }

  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mt-20 mb-8">
        <div className="card-body">
          <h2 className="card-title text-xl text-primary">Chat!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chats with you</span>
            </label>
            <div className="divider"></div>
            <form
              onSubmit={(e: FormEvent<HTMLElement>) => {
                e.preventDefault();
                submitUwUfyRequest();
              }}>
              <StringInputField
                onInput={onInput}
                isInputValid={isInputValid}
                title="Chat!"
                placeholder="No bitches?"
              />
            </form>
          </div>

          <button
            className="btn btn-primary tooltip tooltip-primary "
            data-tip="Click me already!"
            onClick={() => submitUwUfyRequest()}>
            LESS GOO!
          </button>
        </div>
      </div>
    </>
  );
}
