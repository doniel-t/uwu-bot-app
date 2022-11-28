import { NextPage } from 'next';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

type CheckMarkProps = {
  stringInput: string;
  isInputValid: boolean;
};

const CheckMark: NextPage<CheckMarkProps> = ({
  isInputValid,
  stringInput,
}) => {
  return (
    <div className="flex translate-x-2 justify-center self-center ">
      <div
        className={`px-6 transition-opacity duration-200 ease-in ${
          isInputValid ? 'opacity-100' : 'opacity-0'
        } `}>
        <AiFillCheckCircle color="#6CB288" size={32} />
      </div>
    </div>
  );
};

export default CheckMark;
