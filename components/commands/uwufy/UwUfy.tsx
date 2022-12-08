import React from 'react';
import ImageCard from '../../reusable/cards/ImageCard';
import { UwUfyFormComponent } from './UwUfyFormComponent';

export default function UwUfy() {
  return (
    <>
      <ImageCard
        FormComponent={UwUfyFormComponent}
        title="UwUfy!"
        description="UwUfies the Phrase!"
        bgUrl="https://github.com/doniel-t/uwu-bot-app/raw/main/public//uwufy_bg.mp4"
        maxHeight="350"
      />
    </>
  );
}
