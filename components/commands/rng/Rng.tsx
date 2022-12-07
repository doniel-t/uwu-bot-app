import React from 'react';
import Card from '../../reusable/cards/Card';
import { RngFormComponent } from './RngFormComponent';

export default function Rng() {
  return (
    <>
      <Card
        FormComponent={RngFormComponent}
        title="Rng!"
        description="Random number between Lower- and UpperBound!"
        maxHeight="480"
      />
    </>
  );
}
