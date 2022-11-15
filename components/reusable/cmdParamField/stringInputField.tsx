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
    <label className="input-group my-2">
      <span>{title}</span>
      <input
        type="text"
        className="input input-bordered resize w-full"
        onInput={onInput}
        value={stringInput}
        defaultValue={''}
      />
      <CheckMark isInputValid={isValid} stringInput={stringInput} />
    </label>
  );
};

export default StringInputField;
