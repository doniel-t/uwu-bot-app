import React from 'react';
import Card from '../../reusable/cards/Card';
import { MovieFormComponent } from './MovieFormComponent';

export default function MovieSuggestion() {
  return (
    <>
      <Card
        FormComponent={MovieFormComponent}
        title="Movie Suggestion!"
        description="Let me choose a movie for you!"
        maxHeight="600"
      />
    </>
  );
}
