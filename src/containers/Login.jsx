import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { Formik } from 'formik';
import FormBasic from '../components/FormBasic';
import { onSubmit, onTouch } from '../helpers/formFunctions';

const Contact = () => (
  <Container className='formContainer'>
    <Paper className='formPaper'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          lastName: '',
          password: '',
        }}
        onSubmit={onSubmit}
        handleBlur={onTouch}
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
