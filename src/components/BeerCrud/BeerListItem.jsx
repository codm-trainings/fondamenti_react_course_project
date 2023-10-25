import React from 'react';
import { Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function BeerListItem({ beer, onDelete, onEdit }) {
  return (
    <ListGroupItem>
      <ListGroupItemHeading>
        {' '}
        {beer.name}
        {' '}
        -
        {' '}
        {beer.tagline}
      </ListGroupItemHeading>
      <ListGroupItemText>
        {' '}
        {beer.description}
        {' '}
      </ListGroupItemText>
      <Button type="button" color="danger" className="me-2" onClick={() => onDelete(beer.name)}>Delete</Button>
      <Button type="button" color="warning" onClick={() => onEdit(beer.name)}>Edit</Button>
    </ListGroupItem>
  );
}

export default BeerListItem;
