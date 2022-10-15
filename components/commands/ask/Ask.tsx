import React, { FormEvent } from 'react';
import { useState } from 'react';
import { AskParams, AskResponse } from '../../../pages/api/ask/types';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { notifyError, notifySucces } from '../../reusable/cmdParamField/utils';

export default function Ask() {
  const [askResponse, setAskResponse] = useState<AskResponse>();
  const [askInput, setAskInput] = useState<string>();

  function isInputValid(): boolean {
    return askInput != undefined && askInput != '';
  }

  async function submitAskRequest() {
    const params: AskParams = {
      input: askInput as string,
    };

    if (!isInputValid()) {
      notifyError('Ask!');
      return;
    }

    const response = await fetch('/api/ask?' + new URLSearchParams(params));
    const data = await response.json();
    if (navigator) navigator.clipboard.writeText(data.content);
    setAskResponse(data);
    notifySucces(`🥱 ${data.content}`);
  }

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setAskInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mb-12">
        <div className="card-body">
          <h2 className="card-title text-xl text-primary">Ask!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ask me a Question!</span>
            </label>
            <div className="divider"></div>
            <form action="#" onSubmit={() => submitAskRequest()}>
              <StringInputField
                isInputValid={isInputValid}
                onInput={onInput}
                title="Ask!"
                placeholder="Ask me anything!"
              />
            </form>
          </div>
          <button
            className="btn btn-primary tooltip tooltip-primary"
            data-tip="Ask me for permission Daddy!"
            onClick={() => submitAskRequest()}>
            LESS GOO!
          </button>
        </div>
      </div>
    </>
  );
}
