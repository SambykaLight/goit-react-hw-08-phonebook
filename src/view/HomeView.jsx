import React from 'react';
import { Container, Link, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';


const HomeView= () => {
  const isLoggedOut = useSelector(authSelectors.getIsLoggedIn);
    return <Container>
    <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
      Welcome to your personal phonebook. {!isLoggedOut && (
        <>
        Please
      <br />
      <Link to="/RegistrationView" component={NavLink}>
        register
      </Link>{' '}
      or{' '}
      <Link to="/LoginView" component={NavLink}>
        login
      </Link>
      </>)}
    </Typography>
  </Container>
}

export default HomeView