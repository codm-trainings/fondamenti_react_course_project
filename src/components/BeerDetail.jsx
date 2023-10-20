import React from 'react';
import { useParams } from 'react-router-dom';

function BeerDetail() {
  const { beerId } = useParams();
  return <p>{beerId}</p>;
}

export default BeerDetail;
