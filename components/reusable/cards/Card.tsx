import { NextPage } from 'next/types';
import React from 'react';
import useMediaQuery from '../../../utils/hooks/isMobile';

type CardParams = {
  title: string;
  description: string;
  FormComponent: NextPage<{ className?: string }>;
  maxHeight: string;
};

const Card: React.FC<CardParams> = ({
  FormComponent,
  title,
  description,
  maxHeight,
}) => {
  const isMobile = useMediaQuery(600);

  return (
    <>
      <div
        className={`card mx-12 mt-20
        mb-8 flex items-center max-h-[${maxHeight}px] min-h-[350px] w-full 
        max-w-[80%] bg-[#1d1e2b] shadow-xl breakPoint:max-w-[40%] sm:min-w-[400px]`}>
        <div className="card-body flex w-full ">
          <h2 className="items-start pt-1 text-2xl font-semibold text-primary">
            {title}
          </h2>
          <div className="w-full flex-grow justify-center ">
            <label className="label">
              <span className=" text-md font-medium">{description}</span>
            </label>
            <div className="divider"></div>
            <div className="mt-4 flex flex-grow flex-col pb-4">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
