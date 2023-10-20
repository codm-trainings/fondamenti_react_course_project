import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Button,
  Card, CardBody, CardSubtitle, CardText, CardTitle, Container,
} from 'reactstrap';

function BeerDetail() {
  const { beerId } = useParams();

  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [beer, setBeer] = useState();

  // on mount
  useEffect(() => {
    setDataLoading(true);
    fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
      .then((r) => r.json())
      .then(
        ([beerData]) => {
          setBeer(beerData);
          setDataLoading(false);
        },
      ).catch(() => {
        setDataError(true);
        setDataLoading(false);
      });
  }, [beerId]);

  return (
    <Container>
      {dataLoading && <span> Loading </span>}
      {dataError && <span>Error loading data, try later</span>}
      {beer && (

      <Card
        style={{
          width: '18rem',
        }}
      >
        <img
          alt="Sample"
          src={beer.image_url}
        />
        <CardBody>
          <CardTitle tag="h5">
            {beer.name}
            {' '}
            -
            {' '}
            {beer.id}
            {' '}

          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {beer.tagline}
          </CardSubtitle>
          <CardText>
            {beer.description}
          </CardText>
          <Link to={`/beers/${beerId}/edit`}>
            <Button>Edit</Button>
          </Link>
        </CardBody>
      </Card>
      )}

    </Container>
  );
}

export default BeerDetail;
