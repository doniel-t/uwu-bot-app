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
        className={`card w-full
        min[350px]:min-w-[325px] sm:w-full sm:max-w-[80%] lg:max-w-[40%] lg:min-w-[400px] bg-[#1d1e2b] shadow-xl mx-12 mt-20 mb-8 flex min-h-[350px] items-center`}>
        <div className="card-body flex ">
          <h2 className="card-title text-xl text-primary pt-2">{title}</h2>
          <div className="form-control flex-grow self-end">
            <label className="label">
              <span className="label-text">{description}</span>
            </label>
            <div className="divider"></div>
            <div className="flex-grow flex flex-col justify-end mt-4 pb-4">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
