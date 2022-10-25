import { NextPage } from 'next/types';
import React from 'react';

type CardParams = {
  title: string;
  description: string;
  FormComponent: NextPage<{ className?: string }>;
};

const Card: React.FC<CardParams> = ({ FormComponent, title, description }) => {
  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mt-20 mb-8 flex min-h-[325px] items-start">
        <div className="card-body flex">
          <h2 className="card-title text-xl text-primary">{title}</h2>
          <div className="form-control flex-grow self-end">
            <label className="label">
              <span className="label-text">{description}</span>
            </label>
            <div className="divider"></div>
            <div className="flex-grow flex flex-col justify-end my-4 ">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
