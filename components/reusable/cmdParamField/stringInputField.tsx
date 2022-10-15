import { NextPage } from 'next/types';
import { FormEvent } from 'react';
import CheckMark from '../checkMark/checkMark';

type StringInputFieldProps = {
  isInputValid: () => boolean;
  onInput: (e: FormEvent<HTMLInputElement>) => any;
  title: string;
  placeholder: string;
};

const StringInputField: NextPage<StringInputFieldProps> = ({
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
        className="input input-bordered w-1/2"
        onInput={onInput}
      />
      <CheckMark isInputValid={isInputValid} />
    </label>
  );
};

export default StringInputField;
