import React from 'react';
import Card from '../../reusable/cards/Card';
import { ChooseFormComponent } from './ChooseFormComponent';

export default function Choose() {
  return (
    <>
      <Card
        FormComponent={ChooseFormComponent}
        title="Choose!"
        description="Let me choose for you!"
      />
    </>
  );
}
