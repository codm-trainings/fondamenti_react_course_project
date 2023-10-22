import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col,
  Container, Row,
} from 'reactstrap';
import AppForm from '../common/AppForm';

function BeerEdit() {
  const { beerId } = useParams();
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [beer, setBeer] = useState();

  const [formConfig, setFormConfig] = useState([
    {
      fieldName: 'name',
      type: 'text',
      default: '',
      helpText: 'Inserisci il nome della birra',
      validationError: "Il nome non e' valido",
    },
    {
      fieldName: 'description',
      helpText: 'Inserisci la descrizione della birra',
      validationError: "La descrizione non e' valida",
    },
    {
      fieldName: 'tagline',
      helpText: 'Inserisci la tagline della birra',
      validationError: "La tagline non e' valida",
    },
    {
      fieldName: 'image_url',
      helpText: 'Inserisci il link',
      type: 'string',
    },
  ]);

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

  useEffect(() => {
    if (beer) {
      setFormConfig((oldConfig) => oldConfig.map((c) => ({ ...c, default: beer[c.fieldName] })));
    }
  }, [beer]);

  const validateEditBeer = (formValues) => {
    let errors = { name: null, description: null, tagline: null };

    if (formValues.name === '') {
      errors = { ...errors, name: formConfig[0].validationError };
    }
    if (formValues.tagline === '') {
      errors = { ...errors, tagline: formConfig[2].validationError };
    }
    if (formValues.description === '') {
      errors = { ...errors, description: formConfig[1].validationError };
    }

    return errors;
  };

  return (
    <Container className="mt-5">
      {dataLoading && <span> Loading </span>}
      {dataError && <span>Error loading data, try later</span>}
      <Row>
        <Col>
          {beer && (
          <AppForm
            config={formConfig}
            onFormSubmit={(values) => console.log('submitted!', values)}
            onFormValidation={validateEditBeer}
          />
          )}

        </Col>
      </Row>

    </Container>
  );
}

export default BeerEdit;
