import React from 'react';
import Card from '../../reusable/cards/Card';
import { ChatFormComponent } from './ChatFormComponent';

export default function Chat() {
  return (
    <>
      <Card
        FormComponent={ChatFormComponent}
        title="Chat!"
        description="Lets Chat with each other!"
      />
    </>
  );
}
