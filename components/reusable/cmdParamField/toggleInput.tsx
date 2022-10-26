import { NextPage } from 'next';
import { Dispatch, SetStateAction } from 'react';

type ToggleParams = {
  description: string;
  toggleValue: boolean;
  setToggleValue: Dispatch<SetStateAction<boolean>>;
};

const ToggleInput: NextPage<ToggleParams> = ({
  description,
  toggleValue,
  setToggleValue,
}) => {
  return (
    <div className="form-control py-2">
      <label className="label cursor-pointer">
        <span className="label-text ">{description}</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          onChange={() => setToggleValue(!toggleValue)}
        />
      </label>
    </div>
  );
};

export default ToggleInput;
