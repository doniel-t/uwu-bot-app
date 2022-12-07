import React from 'react';
import { submitStringRequest } from '../../../utils/api/submitStringRequest';
import Card from '../../reusable/cards/Card';
import { AskFormComponent } from './AskFormComponent';

export default function Ask() {
  return (
    <>
      <Card
        FormComponent={AskFormComponent}
        title="Ask!"
        description="Ask me a Question!"
        maxHeight="400"
      />
    </>
  );
}
