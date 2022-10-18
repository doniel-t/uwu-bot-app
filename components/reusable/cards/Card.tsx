import { NextPage } from 'next/types';
import React from 'react';

type CardParams = {
  title: string;
  description: string;
  FormComponent: NextPage;
};

const Card: React.FC<CardParams> = ({ FormComponent, title, description }) => {
  return (
    <>
      <div className="card w-96 bg-[#1d1e2b] shadow-xl mx-12 mt-20 mb-8">
        <div className="card-body">
          <h2 className="card-title text-xl text-primary">{title}</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">{description}</span>
            </label>
            <div className="divider"></div>
            <FormComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
