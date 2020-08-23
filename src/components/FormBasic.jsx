import React from 'react';
import {
  Typography, Button, LinearProgress
} from '@material-ui/core';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import PropTypes from 'prop-types';
import { validateField, validateEmail } from '../helpers/formFunctions';

export default function FormBasic(props) {
  const { isSubmitting, submitForm  } = props;

  return (
    <Form className='formControl' id="contact_form">
      <Typography align="center">Join here!</Typography>
      <div className='formRow'>
        <Field
          component={TextField}
          required
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          validate={validateField}
        />
        <Field
          component={TextField}
          className='inputRight'
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          type="text"
          validate={validateField}
        />
      </div>

      <div className='formRow'>
        <Field
          component={TextField}
          required
          id="email"
          name="email"
          label="E-mail"
          variant="outlined"
          type="email"
          className='email'
          validate={validateEmail}
        />
      </div>

      <div className='formRow'>
        <Field
          component={TextField}
          className='formField'
          id="outlined-multiline-static"
          name="message"
          label="Message"
          multiline
          rows={10}
          variant="outlined"
          fullWidth={true}
          validate={validateField}
        />
      </div>
      {isSubmitting ? (
        <LinearProgress
          className='progressBar'
        />
      ) : null}
      <Button
        variant="contained"
        color="default"
        disableElevation
        className='submitButton'
        onClick={submitForm}
      >
        SEND
      </Button>
    </Form>
  );
}

FormBasic.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired
};
