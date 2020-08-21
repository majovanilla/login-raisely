/* eslint-disable no-alert */

export const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {

  }, 500);
};

export const validateEmail = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    error = 'Invalid email address';
  }
  return error;
};

export const validateField = value => {
  let error;
  if (!value) {
    error = 'Required';
  }

  return error;
};
