import { AppBar, Container, Switch } from '@mui/material';
import * as React from 'react';
import { Route } from 'react-router-dom';
import HomeView from 'view/HomeView';
import RegistrationView from 'view/RegistrationView';
import LoginView from 'view/LoginView';
import ContactsView from 'view/ContactsView';

// import MenuIcon from '@mui/icons-material/Menu';

export  function App() {
  return (

    <Container>
      <AppBar/>
      <Switch>
        <Route exact path='/' component={HomeView}/>
        <Route path='/register' component={RegistrationView}/>
        <Route path='login' component={LoginView}/>
        <Route path='/contacts' component={ContactsView}/>
      </Switch>
      </Container>
  );
}