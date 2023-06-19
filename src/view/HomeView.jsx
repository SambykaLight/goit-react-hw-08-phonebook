import React from 'react';
import { Container, Link, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom';

const HomeView= () => {
    return <Container>
    <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
      Welcome to your personal phonebook. Please
      <br />
      <Link to="/RegistrationView" component={NavLink}>
        register
      </Link>{' '}
      or{' '}
      <Link to="/LoginView" component={NavLink}>
        login
      </Link>
    </Typography>
  </Container>
}

export default HomeView