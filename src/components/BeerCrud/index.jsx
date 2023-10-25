import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import BeerForm from './BeerForm';
import BeerList from './BeerList';

function BeerCrud() {
  const [localBeers, setLocalBeers] = useState([]);
  const [currentBeer, setCurrentBeer] = useState();

  const findBeer = (beerName) => localBeers.find((b) => b.name === beerName);
  const createNewBeer = (newBeer) => setLocalBeers((currentBeers) => [...currentBeers, newBeer]);
  const editBeer = (editedBeer) => {
    setLocalBeers(
      (currentBeers) => currentBeers.map((b) => {
        if (b.name !== editedBeer.name) return b;
        return { ...b, ...editedBeer };
      }),
    );
  };

  const onBeerDelete = (beerName) => {
    setLocalBeers(
      (currentBeers) => currentBeers.filter((b) => b.name !== beerName),
    );
  };

  const onBeerSubmit = (values) => {
    setCurrentBeer(null);
    if (findBeer(values.name)) {
      editBeer(values);
      return;
    }

    createNewBeer(values);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BeerForm
            onNewBeerSubmit={onBeerSubmit}
            currentBeer={currentBeer}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <BeerList
            beers={localBeers}
            onDelete={onBeerDelete}
            onEdit={(beerName) => setCurrentBeer(findBeer(beerName))}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BeerCrud;
