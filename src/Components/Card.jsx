import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DetailModal from './DetailModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '50%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content} align="left">
          <Typography component="h5" variant="h5">
            Ainur Rahmat
          </Typography>
          <br/>
          <DetailModal/>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={require("../assets/img/1.jpg")}
        title="Profil"
      />
    </Card>
  );
}