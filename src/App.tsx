import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Jekyll Pay
          </Typography>

          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
