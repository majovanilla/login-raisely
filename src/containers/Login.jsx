import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { Formik } from 'formik';
import contactClasses from '../style/login.module.scss';
import FormBasic from '../components/FormBasic';
import { onSubmit } from '../components/helpers/formFunctions';

const Contact = () => (
  <Container className={contactClasses.formContainer}>
    <Paper className={contactClasses.formPaper}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          lastName: '',
          message: '',
        }}
        onSubmit={onSubmit}
      >
        {({
          submitForm, isSubmitting,
        }) => (
          <FormBasic
            isSubmitting={isSubmitting}
            submitForm={submitForm}
          />
        )}
      </Formik>
    </Paper>
  </Container>
);
export default Contact;
