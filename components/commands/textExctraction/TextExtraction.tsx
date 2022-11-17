import React from 'react';
import Card from '../../reusable/cards/Card';
import { TextExtractionForm } from './TextExtractionFormComponent';

export default function TextExtraction() {
  return (
    <>
      <Card
        FormComponent={TextExtractionForm}
        title="Text Exctraction from Image!"
        description="Lets get text from an Image!"
        maxWidth="100"
      />
    </>
  );
}
