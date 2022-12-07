import { NextPage } from 'next';
import { useState, FormEvent, useRef, ChangeEvent } from 'react';
import {
  notifyCopyToClipboard,
  notifyCustomError,
} from '../../../utils/libs/notify';
import ImageInput from '../../reusable/cmdParamField/imageInput';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import ToggleInput from '../../reusable/cmdParamField/toggleInput';
import handleColorExtraction from './colorExtractor';

export const ColorExtractionForm: NextPage = () => {
  const [imageURL, setImageURL] = useState<string>('');
  const [copyClipboard, setCopyClipboard] = useState<boolean>(false);
  const [hexColors, setHexColors] = useState<string[] | undefined>(
    undefined
  );
  const imageRef = useRef<HTMLImageElement>(null);

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ): string | undefined {
    if (event.target.files == null) return;
    if (!isFileImage(event.target.files[0])) {
      notifyCustomError('Please submit an Image!');
      return;
    }
    try {
      const url = URL.createObjectURL(event.target.files[0]);
      return url;
    } catch (e) {
      notifyCustomError('Please submit an Image!');
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
    if (!event.clipboardData.files) return;
    const fileObj = event.clipboardData.files[0];
    try {
      const url = URL.createObjectURL(fileObj);
      setImageURL(url);
      return url;
    } catch (e) {
      notifyCustomError('Please submit an Image!');
    }
  }

  function isvalidSubmit() {
    return imageURL;
  }

  async function handleSubmit() {
    if (!isvalidSubmit()) {
      notifyCustomError('Please submit an Image!');
      return;
    }
    const url = imageURL;
    const hexColors = await handleColorExtraction(url);
    const hexColorsArr = hexColors.split(',');
    setHexColors(hexColorsArr);
  }

  return (
    <>
      <div className="flex w-full flex-col self-center p-2">
        <div className="self-center">
          <ParamDescription
            paramName="Image"
            description="Upload an Image to get the Colors"
          />
        </div>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            handleSubmit();
          }}></form>
        <div className="flex justify-center">
          <ImageInput
            handleChange={handleChange}
            setImageUploadURL={setImageURL}
            imageUploadURL={imageURL}
          />
        </div>
        <div className="divider font-semibold">OR</div>
        <div
          className="card rounded-box grid h-20 w-5/6 place-items-center self-center border-primary
            bg-base-300 transition delay-75 hover:-translate-y-1 hover:border hover:shadow-2xl"
          onPaste={(e) => handlePaste(e)}>
          Paste it in here!
        </div>
        <img
          src={imageURL}
          ref={imageRef}
          className="my-4 max-h-24 rounded-md object-contain transition delay-150 ease-in-out"></img>
        <div className="flex justify-between text-center">
          {hexColors
            ? hexColors.map((hexColor: string) => {
                return (
                  <div
                    key={`wrapper-${hexColor}`}
                    className="text-evenly my-3 flex justify-between">
                    <div
                      key={`div-${hexColor}`}
                      style={{ backgroundColor: hexColor }}
                      className={`mx-2 w-8 rounded-md shadow-md`}></div>
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => {
                        if (navigator) {
                          navigator.clipboard?.writeText(hexColor);
                          notifyCopyToClipboard();
                        }
                      }}>
                      <p key={hexColor} className={`font-semibold`}>
                        {hexColor}
                      </p>
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <button
        className="btn tooltip btn-primary tooltip-primary w-5/6 self-center"
        data-tip="How about you extract some bitches?"
        onClick={async () => handleSubmit()}>
        LESS GOO!
      </button>
    </>
  );
};

function isFileImage(file: File) {
  return file && file['type'].split('/')[0] === 'image';
}
