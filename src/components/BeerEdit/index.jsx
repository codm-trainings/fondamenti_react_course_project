import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Col,
  Container, Form, FormFeedback, FormGroup, Input, Label, Row,
} from 'reactstrap';


// Creare una nuova pagina BeerNew, dove ho un form per creare una birra.
// Formik puo' essere utilizzato
// La pagina new, sotto il form ha una lista, tale lista in ogni list item ha una descrizione con i campi
// della birra appena inserita
// Il form quindi, al submit inserira' la birra, dopo essere stata opportunamente validata in uno stato
// interno al componente, che avra' una lista delle birre inserite.
// Tale lista sara' mostrata dal componente sotto al form
// I CAMPI DELLA BIRRA A CUI SIAMO INTERESSATI, SONO NAME/DESCRIPTION/TAGLINE
// Per ogni item della lista di sotto, ho un pulsante che mi permette di cancellare quella birra dalla lista.
// Quando non ho birre inserite, la lista mi mostra un testo che mi comunica che non ci sono birre.
// Nella lista di sotto, accanto al bottone per cancellare la birra, avro' un bottone edit, che riempie il form sopra con i dati
// della birra che ho cliccato, e se salvo il form, mi modifica la birra nella lista invece di crearne una nuova.

// Alla fine di ogni inserimento e submit del form, il form deve essere svuotato, ovvero ai valori di default
function BeerEdit() {
  const { beerId } = useParams();
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [beer, setBeer] = useState();

  const { setValues, ...formik } = useFormik({
    initialValues: {
      name: '',
      tagline: '',
      description: '',
    },
    onSubmit: (values) => console.log('submitted!', values),
    validationSchema: Yup.object({
      name: Yup.string().required('Inserisci il nome della birra'),
      tagline: Yup.string().required('Inserisci la tagline della birra').max(10, 'La tagline deve essere massimo di dieci caratter'),
      description: Yup.string().required('Inserisci una descrizione per la birra').max(50, 'La descrizione deve essere massimo di 50 caratteri'),
    }),
  });

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
      setValues({ name: beer.name, tagline: beer.tagline, description: beer.description });
    }
  }, [beer, setValues]);

  return (
    <Container className="mt-5">
      {dataLoading && <span> Loading </span>}
      {dataError && <span>Error loading data, try later</span>}
      <Row>
        <Col>
          {beer && (
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">
                  Name
                </Label>
                <Input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                  id="name"
                  invalid={formik.errors.name}
                />
                <FormFeedback>
                  {formik.errors.name}
                </FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="description">
                  Description
                </Label>
                <Input
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  name="description"
                  id="description"
                  invalid={formik.errors.description}

                />
                <FormFeedback>
                  {formik.errors.description}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="tagline">
                  Tagline
                </Label>
                <Input
                  value={formik.values.tagline}
                  onChange={formik.handleChange}
                  name="tagline"
                  invalid={formik.errors.tagline}
                  id="tagline"
                />
                <FormFeedback>
                  {formik.errors.tagline}
                </FormFeedback>
              </FormGroup>

              <Button type="submit" disabled={!formik.isValid}> Edit beer </Button>
            </Form>
          )}
        </Col>
      </Row>

    </Container>
  );
}

export default BeerEdit;
