import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Form, FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';

function BeerForm({
  onNewBeerSubmit,
  currentBeer,
}) {
  const { setValues, resetForm, ...formik } = useFormik({
    initialValues: {
      name: '',
      tagline: '',
      description: '',
    },
    onSubmit: onNewBeerSubmit,
    validationSchema: Yup.object({
      name: Yup.string().required('Inserisci il nome della birra'),
      tagline: Yup.string().required('Inserisci la tagline della birra').max(10, 'La tagline deve essere massimo di dieci caratter'),
      description: Yup.string().required('Inserisci una descrizione per la birra').max(50, 'La descrizione deve essere massimo di 50 caratteri'),
    }),
  });

  useEffect(() => {
    if (!currentBeer) {
      resetForm();
      return;
    }
    setValues(currentBeer);
  }, [currentBeer, setValues, resetForm]);

  return (
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

      <Button type="submit" disabled={!formik.isValid}> Submit </Button>
    </Form>
  );
}

export default BeerForm;
