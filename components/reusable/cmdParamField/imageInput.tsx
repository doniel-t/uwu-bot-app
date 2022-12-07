import { NextPage } from 'next';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from 'react';

type ImageInputParams = {
  imageUploadURL: string;
  setImageUploadURL: Dispatch<SetStateAction<string>>;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => string | undefined;
};

const ImageInput: NextPage<ImageInputParams> = ({
  handleChange,
  setImageUploadURL,
}) => {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        placeholder=""
        id="imageUpload"
        onChange={async (event) => {
          const url = await handleChange(event);
          setImageUploadURL(url!);
        }}
        className="file-input file-input-bordered file-input-primary my-2 
        w-full max-w-[24rem] font-semibold hover:border-primary-content hover:bg-[#FF2EA4] hover:text-primary-content"
      />
    </>
  );
};

export default ImageInput;
