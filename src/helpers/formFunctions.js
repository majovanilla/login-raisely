import axios from 'axios';

export const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    axios({
      method: 'post',
      url: 'https://api.raisely.com/v3/signup',
      data: {
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
          "firstName": values.name,
          "lastName": values.lastName,
          "email": values.email,
          "password": values.password,
        }
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }, 500);
};

export const onTouch = values => {
  axios({
    method: 'post',
    url: 'https://api.raisely.com/v3/check-use',
    data: {
      "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      "data": {
        "email": values.email,
      }
    }
  })
    .then(response => {
      if (response.data.status == 'EXISTS') {
        console.log('The address is taken')
      } else {
        console.log('The address is valid')
      }
    })
    .catch(error => console.log(error));
}

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
