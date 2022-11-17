import React from 'react';
import Card from '../../reusable/cards/Card';
import { AskFormComponent } from './AskFormComponent';

export default function Ask() {
  return (
    <>
      <Card
        FormComponent={AskFormComponent}
        title="Ask!"
        description="Ask me a Question!"
        maxWidth="40"
      />
    </>
  );
}
