import { Fragment } from 'react';

import logo from './logo.svg';
import './App.css';

import { CssBaseline, Box, Container } from '@mui/material';
import { GreeterComponent } from './components';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: '#cfe8fc',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#000',
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <GreeterComponent />
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
