import { NextPage } from 'next/types';
import { FormEvent, useState } from 'react';
import CheckMark from '../checkMark/checkMark';

type StringInputFieldProps = {
  stringInput: string;
  isInputValid: (stringInput: string) => boolean;
  onInput: (e: FormEvent<HTMLInputElement>) => any;
  title: string;
  placeholder: string;
};

const StringInputField: NextPage<StringInputFieldProps> = ({
  stringInput,
  isInputValid,
  onInput,
  title,
  placeholder,
}) => {
  return (
    <label className="input-group my-2">
      <span>{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full resize"
        onInput={onInput}
      />
      <CheckMark isInputValid={isInputValid} stringInput={stringInput} />
    </label>
  );
};

export default StringInputField;
