import { NextPage } from 'next/types';
import React from 'react';
import { filter } from 'vue/types/umd';

type CardParams = {
  title: string;
  description: string;
  FormComponent: NextPage<{ className?: string }>;
  maxHeight: string;
  bgUrl: string;
};

const ImageCard: React.FC<CardParams> = ({
  FormComponent,
  title,
  description,
  maxHeight,
  bgUrl,
}) => {
  return (
    <>
      <div
        className={`
        card image-full z-0 mx-12 mt-20 mb-8
        flex bg-cover max-h-[${maxHeight}px] min[350px]:min-w-[325px] min-h-[250px] w-full 
        items-center bg-[#1d1e2b]
        object-fill
        shadow-xl 
        sm:w-full sm:max-w-[80%] lg:min-w-[400px] lg:max-w-[65%]`}>
        <figure className="h-full w-full">
          <img
            src={`${bgUrl}`}
            alt="fancy background omegalul"
            className="scale-[1.8] object-fill opacity-30 blur"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-24 self-center pt-2 text-3xl text-primary">
            {title}
          </h2>
          <div className="form-control flex-grow self-center">
            <label className="label self-center font-semibold">
              <span className="label-text text-lg">{description}</span>
            </label>
            <div className="divider"></div>
            <div className="mt-4 flex w-[30vw] flex-grow flex-col justify-center pb-4">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
