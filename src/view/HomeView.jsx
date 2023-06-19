import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import {  React} from "react";

const HomeView = () => (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Registration</Button>
        </Toolbar>
      </AppBar>
    </Box>
);

export default HomeView;