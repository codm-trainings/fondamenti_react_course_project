import React from 'react';
import { ListGroup } from 'reactstrap';
import BeerListItem from './BeerListItem';

function BeerList({ beers, onEdit, onDelete }) {
  if (!beers || beers.length === 0) {
    return (
      <h3>
        {' '}
        No beers yet!
      </h3>
    );
  }
  return (
    <ListGroup>
      {beers.map((b) => (
        <BeerListItem key={b.name} beer={b} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ListGroup>
  );
}

export default BeerList;
