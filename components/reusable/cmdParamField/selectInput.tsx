import { NextPage } from 'next';
import { Dispatch, SetStateAction } from 'react';

type SelectInputParams = {
  title: string;
  options: string[];
  setValue: Dispatch<SetStateAction<string>>;
};

const SelectInput: NextPage<SelectInputParams> = ({
  title,
  options,
  setValue,
}) => {
  return (
    <>
      <select
        className="select mb-4 w-full max-w-xs"
        onChange={(e) => setValue(e.currentTarget.value)}>
        <option disabled selected defaultValue={title}>
          {title}
        </option>
        {options.map((option: string) => {
          return (
            <option className="font-semibold text-primary" key={option}>
              {option.toUpperCase()}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectInput;
