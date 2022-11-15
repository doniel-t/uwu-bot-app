import { NextPage } from 'next';
import { useState, FormEvent, useRef, ChangeEvent } from 'react';
import { notifyCustomError } from '../../../utils/libs/notify';
import ImageInput from '../../reusable/cmdParamField/imageInput';
import ParamDescription from '../../reusable/cmdParamField/inputDescription';
import ToggleInput from '../../reusable/cmdParamField/toggleInput';
import handleTextExtraction from './textExtractionWrapper';

export const TextExtractionForm: NextPage = () => {
  const [imageURL, setImageURL] = useState<string>('');
  const [copyClipboard, setCopyClipboard] = useState<boolean>(false);
  const [detectedText, setDetectedText] = useState<string>('');
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
    await handleTextExtraction(url, copyClipboard, setDetectedText);
  }

  return (
    <>
      <ParamDescription
        paramName="Image"
        description="Upload an Image with Text"
      />
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          handleSubmit();
        }}></form>
      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <ImageInput
            handleChange={handleChange}
            setImageUploadURL={setImageURL}
            imageUploadURL={imageURL}
          />
        </div>
        <div className="divider font-semibold">OR</div>
        <div
          className="grid h-20 card bg-base-300 rounded-box place-items-center
            hover:-translate-y-1 transition hover:border delay-75 border-primary"
          onPaste={(e) => handlePaste(e)}>
          Paste it in here!
        </div>
      </div>

      <ToggleInput
        description="Do you want to copy the Text?"
        toggleValue={copyClipboard}
        setToggleValue={setCopyClipboard}
      />
      <img
        src={imageURL}
        ref={imageRef}
        className="my-2 rounded-md transition ease-in-out delay-150"></img>
      <textarea
        className="textarea mb-2"
        placeholder="Text will appear here! 😀"
        value={detectedText}
        readOnly={true}></textarea>
      <button
        className="btn btn-primary tooltip tooltip-primary"
        data-tip="Ask me for Permission!"
        onClick={async () => handleSubmit()}>
        LESS GOO!
      </button>
    </>
  );
};

function isFileImage(file: File) {
  return file && file['type'].split('/')[0] === 'image';
}