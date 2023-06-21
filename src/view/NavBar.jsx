import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import UserMenu from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';



export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{textDecoration:"none", color: "white"}} to="/">Home</Link>
{      isLoggedIn &&      <Link style={{textDecoration:"none", color: "white", paddingLeft: 20}} to="ContactsView" color="inherit">Contacts</Link>
}
          </Typography>
          { isLoggedIn ? <UserMenu/> : <AuthNav/>}
          
          


        </Toolbar>
      </AppBar>
    </Box>
  );
}
