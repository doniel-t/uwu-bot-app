import { NextPage } from 'next/types';
import { FormEvent, useState } from 'react';
import { isInputValid } from '../../../utils/api/submitStringRequest';
import CheckMark from '../checkMark/checkMark';

type StringInputFieldProps = {
  stringInput: string;
  customIsInputValid?: (stringInput: string) => boolean;
  onInput: (e: FormEvent<HTMLInputElement>) => any;
  title: string;
  placeholder: string;
};

const StringInputField: NextPage<StringInputFieldProps> = ({
  stringInput,
  onInput,
  customIsInputValid,
  title,
  placeholder,
}) => {
  const isValid = customIsInputValid
    ? customIsInputValid(stringInput)
    : isInputValid(stringInput);

  return (
    <label className="input-group my-2">
      <span>{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full resize"
        onInput={onInput}
        value={stringInput}
      />
      <CheckMark isInputValid={isValid} stringInput={stringInput} />
    </label>
  );
};

export default StringInputField;
