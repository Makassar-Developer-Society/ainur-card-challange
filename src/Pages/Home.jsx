import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '../Components/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item md={6} xs={6}> 
          <Card/>
        </Grid>
      </Grid>
    </div>
  );
}
