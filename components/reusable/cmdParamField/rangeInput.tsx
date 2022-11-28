import { NextPage } from 'next';
import { Dispatch, SetStateAction } from 'react';

type RangeParams = {
  minValue: number;
  maxValue: number;
  currentValue: number;
  setCurrentValue: Dispatch<SetStateAction<number>>;
};

const RangeInput: NextPage<RangeParams> = ({
  minValue,
  maxValue,
  currentValue,
  setCurrentValue,
}) => {
  return (
    <div className="my-2 flex flex-wrap justify-between">
      <input
        type="range"
        min={minValue}
        max={maxValue}
        step={2}
        value={currentValue}
        className="range range-primary"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setCurrentValue(Number(e.currentTarget.value));
        }}
      />
      <div>{minValue}</div>
      <div> {maxValue / 2}</div>
      <div>{maxValue}</div>
    </div>
  );
};

export default RangeInput;
