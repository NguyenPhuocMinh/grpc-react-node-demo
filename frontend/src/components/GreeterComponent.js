import { Fragment, useState } from 'react';
import { isEmpty } from 'lodash';
import { TextField, Button, Typography } from '@mui/material';
import { greeterClient } from '../grpc-client';
import { GreetRequest } from '../proto/greeting_pb';

const GreeterComponent = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (data) => {
    const request = new GreetRequest();
    console.log('🚀 ~ file: GreeterComponent.js:17 ~ handleSubmit ~ request:', request);
    if (!isEmpty(data)) {
      request.setName(data);
      greeterClient.greet(request, {}, (err, response) => {
        if (err) {
          console.log(`Unexpected error for sayHello: code = ${err.code}` + `, message = "${err.message}"`);
        } else {
          console.log('Response Message', response.getMessage());
          setMessage(response.getMessage());
        }
      });
    }
  };

  return (
    <Fragment>
      <Typography variant="h2">Enter the name</Typography>
      <TextField
        sx={{
          width: '300px',
          margin: '1rem 0',
        }}
        label="Input name"
        variant="outlined"
        onChange={handleChange}
        autoComplete="off"
      />
      <Button
        sx={{
          margin: '1rem 0',
        }}
        variant="contained"
        onClick={() => handleSubmit(name)}
      >
        Submit
      </Button>
      {!isEmpty(message) && (
        <Typography sx={{ color: 'red' }} variant="body2">
          {message}
        </Typography>
      )}
    </Fragment>
  );
};

export default GreeterComponent;
