import { NextPage } from 'next/types';
import React from 'react';

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
        items-center
        bg-[#1d1e2b]
        object-fill
        shadow-xl
        min-w-[80%]
        sm:min-w-[400px] md:min-w-[80%] lg:min-w-[80%] lg:max-w-[65%]`}>
        <figure className="h-full w-full">
          <video
            src={`${bgUrl}`}
            loop={true}
            playsInline={true}
            muted={true}
            autoPlay={true}
            className="scale-[1.8] object-fill opacity-25 blur"
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
            <div className="mt-4 flex w-[30vw] min-w-[300px] flex-grow flex-col pb-4">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
