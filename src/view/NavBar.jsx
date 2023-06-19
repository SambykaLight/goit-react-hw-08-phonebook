import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{textDecoration:"none", color: "white"}} to="HomeView">Home</Link>
            <Link style={{textDecoration:"none", color: "white", paddingLeft: 20}} to="ContactsView" color="inherit">Contacts</Link>

          </Typography>
          <Link style={{textDecoration:"none", color: "white", paddingRight: 20}} to="LoginView" color="inherit"> 
            Login</Link>
          <Link style={{textDecoration:"none", color: "white"}} to="RegistrationView" color="inherit">Sign Up</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
