import { NextPage } from 'next/types';
import { FormEvent } from 'react';
import { isInputValid } from '../../../utils/api/submitStringRequest';
import CheckMark from '../checkMark/checkMark';

type StringInputFieldProps = {
  stringInput: string;
  customIsInputValid?: (stringInput: string) => boolean;
  onInput: (e: FormEvent<HTMLInputElement>) => any;
  title: string;
};

const StringInputField: NextPage<StringInputFieldProps> = ({
  stringInput,
  onInput,
  customIsInputValid,
  title,
}) => {
  const isValid = customIsInputValid
    ? customIsInputValid(stringInput)
    : isInputValid(stringInput);

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          className="input-border input w-[30vw] max-w-xs border p-4"
          onInput={onInput}
          value={stringInput}
          defaultValue={''}
        />
        <CheckMark isInputValid={isValid} stringInput={stringInput} />
      </div>
    </>
  );
};

export default StringInputField;
