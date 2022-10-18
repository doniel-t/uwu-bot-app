import React from 'react';
import Card from '../../reusable/cards/Card';
import { CleverbotFormComponent } from './CleverBotFormComponent';

export default function Cleverbot() {
  return (
    <>
      <Card
        FormComponent={CleverbotFormComponent}
        title="Chat!"
        description="Lets Chat with each other!"
      />
    </>
  );
}
