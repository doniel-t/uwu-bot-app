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
        className="select w-full max-w-xs mb-4"
        onChange={(e) => setValue(e.currentTarget.value)}>
        <option disabled defaultValue={title}>
          {title}
        </option>
        {options.map((option: string) => {
          return (
            <option className="text-primary font-semibold" key={option}>
              {option.toUpperCase()}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectInput;
