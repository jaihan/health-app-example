import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2em'
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid xs={6}>
          <Card >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <img src="static/images/scan.png" alt="scan" width="200" height="200"/>
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Scan & Pay</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Pay with credits
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid xs={6}>
          <Card >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <img src="static/images/claim.png" alt="claim" width="200" height="200"/>
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Submit Claim</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Pay cash & claim later
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}