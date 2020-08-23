import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { Formik } from 'formik';
import FormBasic from '../components/FormBasic';
import { onSubmit } from '../helpers/formFunctions';

const Contact = () => (
  <Container className='formContainer'>
    <Paper className='formPaper'>
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
