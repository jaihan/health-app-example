import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: '2em'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MEDICAL CREDITS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Balance
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <b>MMK 110,000</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Valid 1 Jan 2019-31 Dec 2019
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}