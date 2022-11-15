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
        onChange={async (event) => {
          const url = await handleChange(event);
          setImageUploadURL(url!);
        }}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs my-2"
      />
    </>
  );
};

export default ImageInput;
