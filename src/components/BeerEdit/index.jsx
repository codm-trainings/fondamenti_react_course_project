import React from 'react';
import { useParams } from 'react-router-dom';

function BeerEdit() {
  const { beerId } = useParams();

  return (
    <h2>
      {' '}
      edit
      {' '}
      {beerId}
      {' '}
    </h2>
  );
}

export default BeerEdit;
