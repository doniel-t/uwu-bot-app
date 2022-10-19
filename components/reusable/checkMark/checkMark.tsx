import { NextPage } from 'next';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

type CheckMarkProps = {
  stringInput: string;
  isInputValid: boolean;
};

const CheckMark: NextPage<CheckMarkProps> = ({ isInputValid, stringInput }) => {
  return (
    <div
      className={`px-6 transition-opacity ease-in duration-200 ${
        isInputValid ? 'opacity-100' : 'opacity-0'
      } `}>
      <AiFillCheckCircle color="#6CB288" size={45} />
    </div>
  );
};

export default CheckMark;
