import React from 'react';
import Card from '../../reusable/cards/Card';
import ImageCard from '../../reusable/cards/ImageCard';
import { UwUfyFormComponent } from './UwUfyFormComponent';

export default function UwUfy() {
  return (
    <>
      <ImageCard
        FormComponent={UwUfyFormComponent}
        title="UwUfy!"
        description="UwUfies the Phrase!"
        bgUrl="/uwufy_bg.gif"
        maxHeight="350"
      />
    </>
  );
}
