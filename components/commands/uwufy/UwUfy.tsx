import React, { FormEvent } from 'react';
import { useState } from 'react';
import { UwUfyParams, UwUfyResponse } from '../../../pages/api/uwufy/types';
import { toast } from 'react-toastify';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { notifyError, notifySucces } from '../../reusable/cmdParamField/utils';

export default function UwUfy() {
  const [uwufied, setUwufied] = useState<UwUfyResponse>();
  const [uwufyInput, setUwufyInput] = useState<string>();

  function isInputValid(): boolean {
    return uwufyInput != undefined && uwufyInput != '';
  }

  function onInput(e: FormEvent<HTMLElement>) {
    setUwufyInput((e.target as HTMLInputElement).value);
  }

  async function submitUwUfyRequest() {
    const params: UwUfyParams = {
      input: uwufyInput as string,
    };

    if (!isInputValid()) {
      notifyError('UwUfy');
      return;
    }

    const response = await fetch('/api/uwufy?' + new URLSearchParams(params));
    const data = await response.json();
    if (navigator) navigator.clipboard.writeText(data.content);
    setUwufied(data);
    notifySucces('Copied to Clipboard!');
  }

  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mb-8">
        <div className="card-body">
          <h2 className="card-title text-xl text-primary">UwUfy!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">UwUfies a phrase</span>
            </label>
            <div className="divider"></div>
            <form action="#" onSubmit={() => submitUwUfyRequest()}>
              <StringInputField
                onInput={onInput}
                isInputValid={isInputValid}
                title="UwUfy!"
                placeholder="UwUfy me!"
              />
            </form>
          </div>

          <button
            className="btn btn-primary tooltip tooltip-primary "
            data-tip="UwU me Daddy!"
            onClick={() => submitUwUfyRequest()}>
            LESS GOO!
          </button>

          <div className="card-actions"></div>
          <div className="font-sans font-semibold">UwUfied: {uwufied?.content}</div>
        </div>
      </div>
    </>
  );
}
