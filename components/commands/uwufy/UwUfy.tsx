import React from 'react';
import Card from '../../reusable/cards/Card';
import { UwUfyFormComponent } from './UwUfyFormComponent';

export default function UwUfy() {
  return (
    <>
      <Card
        FormComponent={UwUfyFormComponent}
        title="UwUfy!"
        description="UwUfies the Phrase!"
        maxWidth="40"
      />
    </>
  );
}
