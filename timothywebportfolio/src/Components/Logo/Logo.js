import React from 'react';
import './Logo.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Logo(props) {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
          <img className='imageLogo' src={props.logo}/>
      </Paper>
    </div>
  );
}

export default Logo