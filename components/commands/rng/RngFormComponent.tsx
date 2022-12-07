import { NextPage } from 'next';
import { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import CheckMark from '../../reusable/checkMark/checkMark';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitRngRequest, isInputValid } from './rngRequest';

export const RngFormComponent: NextPage = () => {
  const [rngResponse, setRngResponse] = useState<StringResponse>();
  const [lowerboundInput, setLowerboundInput] = useState<string>();
  const [upperboundInput, setUpperboundInput] = useState<string>();

  const isValid =
    isInputValid(lowerboundInput!) && isInputValid(upperboundInput!);

  return (
    <>
      <div className="breadcrumbs z-0 mb-4 flex justify-evenly text-sm">
        <ul className="mt-2">
          <li>
            <div className="flex w-24">
              <input
                type="text"
                placeholder="5"
                onInput={(e: FormEvent<HTMLInputElement>) =>
                  setLowerboundInput(e.currentTarget?.value)
                }
                className=" w-full rounded-lg bg-[#28283c] p-2 text-center"
              />
            </div>
          </li>
          <li>Your Number</li>
          <li>
            <div className="flex w-24">
              <input
                type="text"
                placeholder="10"
                onInput={(e: FormEvent<HTMLInputElement>) =>
                  setUpperboundInput(e.currentTarget?.value)
                }
                className=" w-full rounded-lg bg-[#28283c] p-2 text-center"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="breadcrumbs mb-4 flex justify-evenly text-sm">
        <ul className="-mt-2">
          <li>
            <div className="flex w-24 justify-center text-center">
              lower
            </div>
          </li>
          <li>
            <div className="z-10 flex w-24">
              <CheckMark isInputValid={isValid} />
            </div>
          </li>
          <li>
            <div className="flex w-24 justify-center text-center">
              upper
            </div>
          </li>
        </ul>
      </div>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitRngRequest(
            lowerboundInput!,
            upperboundInput!,
            setRngResponse
          );
        }}></form>
      <button
        id="submit"
        className="btn tooltip btn-primary tooltip-primary w-5/6 self-center"
        data-tip="Let RNGesus guide you!"
        onClick={async () => {
          submitRngRequest(
            lowerboundInput!,
            upperboundInput!,
            setRngResponse
          );
        }}>
        LESS GOO!
      </button>
    </>
  );
};
