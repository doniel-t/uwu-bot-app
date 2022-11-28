import { NextPage } from 'next/types';
import React from 'react';

type CardParams = {
  title: string;
  description: string;
  FormComponent: NextPage<{ className?: string }>;
  maxWidth: string;
};

const Card: React.FC<CardParams> = ({
  FormComponent,
  title,
  description,
  maxWidth,
}) => {
  return (
    <>
      <div
        className={`min[350px]:min-w-[325px] card
        mx-12 mt-20 mb-8 flex min-h-[350px] w-full items-center 
        bg-[#1d1e2b] shadow-xl sm:w-full sm:max-w-[80%] lg:min-w-[400px] lg:max-w-[40%]`}>
        <div className="card-body flex ">
          <h2 className="card-title pt-2 text-xl text-primary">{title}</h2>
          <div className="form-control flex-grow self-end">
            <label className="label">
              <span className="label-text">{description}</span>
            </label>
            <div className="divider"></div>
            <div className="mt-4 flex flex-grow flex-col justify-end pb-4">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
