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
        bgUrl="/uwufy_bg.webm"
        maxHeight="350"
      />
    </>
  );
}
