import React, { FormEvent } from 'react';
import { useState } from 'react';
import {
  StringCommandParams,
  StringResponse,
} from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { notifyError, notifySucces } from '../../reusable/cmdParamField/utils';

export default function Choose() {
  const [chooseResponse, setChooseResponse] = useState<StringResponse>();
  const [chooseInput, setChooseInput] = useState<string>();

  function isInputValid(): boolean {
    return chooseInput != undefined && chooseInput != '' && chooseInput.includes(',');
  }

  async function submitAskRequest() {
    const params: StringCommandParams = {
      input: chooseInput as string,
    };

    if (!isInputValid()) {
      notifyError('Choose!');
      return;
    }

    const response = await fetch('/api/choose?' + new URLSearchParams(params));
    const data = await response.json();
    if (navigator) navigator.clipboard.writeText(data.content);
    setChooseResponse(data);
    notifySucces(`🥱 ${data.content}`);
  }

  function onInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setChooseInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mt-20 mb-8">
        <div className="card-body">
          <h2 className="card-title text-xl text-primary">Choose!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Let me choose for you!</span>
            </label>
            <label className="label">
              <span className="label-text">Separate your input by ","</span>
            </label>
            <div className="divider"></div>
            <form
              onSubmit={(e: FormEvent<HTMLElement>) => {
                e.preventDefault();
                submitAskRequest();
              }}>
              <StringInputField
                isInputValid={isInputValid}
                onInput={onInput}
                title="Choose!"
                placeholder="Choices"
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
