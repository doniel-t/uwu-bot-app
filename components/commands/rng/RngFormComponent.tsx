import { NextPage } from 'next';
import { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { StringResponse } from '../../../types/stringCommands/stringCommandTypes';
import StringInputField from '../../reusable/cmdParamField/stringInputField';
import { submitRngRequest, isInputValid } from './rngRequest';

export const RngFormComponent: NextPage = () => {
  const [rngResponse, setRngResponse] = useState<StringResponse>();
  const [lowerboundInput, setLowerboundInput] = useState<string>();
  const [upperboundInput, setUpperboundInput] = useState<string>();

  function onInput(
    e: FormEvent<HTMLInputElement>,
    boundSetter: Dispatch<SetStateAction<string | undefined>>
  ) {
    e.preventDefault();
    boundSetter((e.target as HTMLInputElement).value);
  }
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          submitRngRequest(lowerboundInput!, upperboundInput!, setRngResponse);
          setLowerboundInput('');
          setUpperboundInput('');
        }}>
        <StringInputField
          stringInput={lowerboundInput!}
          customIsInputValid={() => isInputValid(lowerboundInput!)}
          onInput={(e) => onInput(e, setLowerboundInput)}
          title="LowerBound!"
          placeholder="Low!"
        />
        <StringInputField
          stringInput={upperboundInput!}
          customIsInputValid={() => isInputValid(upperboundInput!)}
          onInput={(e) => onInput(e, setUpperboundInput)}
          title="UpperBound!"
          placeholder="Big!"
        />
      </form>
      <button
        id="submit"
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Let RNGesus guide you!"
        onClick={async () => {
          submitRngRequest(lowerboundInput!, upperboundInput!, setRngResponse);
          setLowerboundInput('');
          setUpperboundInput('');
        }}>
        LESS GOO!
      </button>
    </>
  );
};
