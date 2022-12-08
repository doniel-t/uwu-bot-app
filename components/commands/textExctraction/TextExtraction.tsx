import React from 'react';
import ImageCard from '../../reusable/cards/ImageCard';
import { TextExtractionForm } from './TextExtractionFormComponent';

export default function TextExtraction() {
  return (
    <>
      <ImageCard
        FormComponent={TextExtractionForm}
        title="Text Exctraction from Image!"
        description="Lets get text from an Image!"
        bgUrl="https://github.com/doniel-t/uwu-bot-app/raw/main/public//textExtraction_bg.mp4"
        maxHeight="600"
      />
    </>
  );
}
