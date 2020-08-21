import React from 'react';
import {
  Typography, Button, Icon, LinearProgress,
} from '@material-ui/core';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Proptypes from 'prop-types';
import contactClasses from '../../style/contact.module.scss';
import { validateField, validateEmail } from '../helpers/formFunctions';

export default function FormBasic({ isSubmitting, submitForm }) {
  return (
    <Form className={contactClasses.formControl} id="contact_form">
      <Typography type="h3" align="center">Contact Me!</Typography>
      <div className={contactClasses.formRow}>
        <Field
          component={TextField}
          className={`${contactClasses.textField__left}`}
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
          className={`${contactClasses.textField}`}
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          type="text"
          validate={validateField}
        />
      </div>

      <div className={`${contactClasses.formRow}`}>
        <Field
          component={TextField}
          required
          id="email"
          name="email"
          label="E-mail"
          variant="outlined"
          type="email"
          className={contactClasses.email}
          validate={validateEmail}
        />
      </div>

      <div className={contactClasses.formRow}>
        <Field
          component={TextField}
          className={contactClasses.formField}
          id="outlined-multiline-static"
          name="message"
          label="Message"
          multiline
          rows={10}
          variant="outlined"
          fullWidth="true"
          validate={validateField}
        />
      </div>
      <Field
        type="hidden"
        name="contactNumber"
        component={TextField}
      />
      {isSubmitting ? (
        <LinearProgress
          className={contactClasses.progressBar}
        />
      ) : null}
      <Button
        variant="contained"
        color="default"
        disableElevation
        endIcon={<Icon>send</Icon>}
        className={contactClasses.submitButton}
        onClick={submitForm}
      >
        Send
      </Button>
    </Form>
  );
}

FormBasic.propTypes = {
  isSubmitting: Proptypes.func.isRequired,
  submitForm: Proptypes.func.isRequired,
  validateEmail: Proptypes.func.isRequired,
  validateField: Proptypes.func.isRequired,
};
