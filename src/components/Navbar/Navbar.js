import React from 'react';
import Button from '@mui/material/Button';

import { useStyle } from './styles';

function Navbar() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <h3 className={classes.heading}>React - Mui UI - build as Micro Front end</h3>
      </div>
      <Button variant="outlined" onClick={() => window.location.reload()}>
        Reset Chart
      </Button>
    </div>
  );
}

export default Navbar;
