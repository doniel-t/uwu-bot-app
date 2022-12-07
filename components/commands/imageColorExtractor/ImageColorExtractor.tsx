import React from 'react';
import Card from '../../reusable/cards/Card';
import { ColorExtractionForm } from './ColorExtractorFormComponent';

export default function ImageColorExtraction() {
  return (
    <>
      <Card
        FormComponent={ColorExtractionForm}
        title="Hex Color Extraction from Image!"
        description="Gives you the 3 most prominent Colors in an Image"
        maxHeight="600"
      />
    </>
  );
}
