import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Experiance() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Web
        </Typography>
        <Typography variant="h5" component="h2">
          Experience
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Developer/Engineer
        </Typography>
        <Typography variant="body2" component="p">
        · Highly experienced in building modern web applications based on React/Redux frameworks, JavaScript, Python, Django and other expertise.
            <br />
        · Knowledge of Web Services like Google Firebase.
            <br />
        · Hand-on experience implimenting unit-tests
            <br />
        · Infrastructure / DevOps experience (continuous integration setup, deploying and running applications in a test and production environment etc.)
            <br />
        · Solid understanding of the Agile development practices and the software development lifecycle.
            <br />
        · Experience with Continuous Integration (CI) and Continuous Delivery (CD) practices.
            <br />        
        · Thrives in a fast-paced, startup environment, flourishes while working alone or in a team.
            <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Experiance