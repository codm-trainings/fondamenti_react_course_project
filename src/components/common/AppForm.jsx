import React, { useEffect, useState } from 'react';
import {
  Button,
  Form, FormFeedback,
  FormGroup, FormText, Input, Label,
} from 'reactstrap';
// [ { fieldName: 'name', default: '', type: '' }]
const formConfiguration = (formItems) => formItems.reduce((acc, curr) => ({
  ...acc,
  [curr.fieldName]: {
    type: curr.type || 'text',
    default: curr.default || '',
    validationError: curr.helpText || 'Is invalid',
    helpText: curr.helpText || '',
  },
}), {});

const extractDefaultFormValuesFromConfig = (config) => Object.keys(config).reduce((acc, curr) => ({
  ...acc,
  [curr]: config[curr].default,
}), {});

const extractErrorsFromConfig = (config) => Object.keys(config).reduce((acc, curr) => ({
  ...acc,
  [curr]: null,
}), {});

function AppForm({
  config,
  onFormSubmit,
  onFormValidation,
}) {
  const [formConfig, setFormConfig] = useState({});
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (config) {
      const createdConfig = formConfiguration(config);
      setFormConfig(createdConfig);
      setFormValues(extractDefaultFormValuesFromConfig(createdConfig));
      setFormErrors(extractErrorsFromConfig(createdConfig));
    }
  }, [config, setFormConfig, setFormValues, setFormErrors]);

  const updateFormValues = (formEvent) => {
    setFormErrors(extractErrorsFromConfig(formConfig));
    setFormValues((oldValues) => ({
      ...oldValues,
      [formEvent.target.name]: formEvent.target.value,
    }));
  };

  const validateFormWithCb = () => {
    const erroredFields = onFormValidation(formValues);

    return {
      errors: erroredFields,
      errored: Object.keys(erroredFields).some((value) => erroredFields[value] !== null),
    };
  };

  const submitForm = (formEvent) => {
    formEvent.preventDefault();
    console.log('formValues', formValues);
    const { errors, errored } = validateFormWithCb();
    setFormErrors(errors);

    if (errored) {
      console.log('Validation errors', errors);
      return;
    }
    onFormSubmit(formValues);
  };

  return (
    <Form onSubmit={submitForm}>
      {Object.keys(formConfig).map((fieldName) => (
        <FormGroup key={fieldName}>
          <Label for="name">
            {fieldName.toUpperCase()}
          </Label>
          <Input
            value={formValues[fieldName]}
            name={fieldName}
            onChange={updateFormValues}
            type={formConfig[fieldName].type}
            invalid={formErrors[fieldName] !== null}
          />
          <FormFeedback>
            {formErrors[fieldName]}
          </FormFeedback>
          {formConfig[fieldName].helpText && (
          <FormText>
            {formConfig[fieldName].helpText}
          </FormText>
          )}
        </FormGroup>
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AppForm;
