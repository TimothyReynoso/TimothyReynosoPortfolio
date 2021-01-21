import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import './Breaker.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(1),
      width: theme.spacing(1000),
      height: theme.spacing(13),
    },
  },
}));

function Breaker(props){
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper id='Breaker' elevation={3}>
                <Typography variant="h4" component="h4">
                    {props.breaker}
                </Typography>
            </Paper>
        </div>
    );
}

export default Breaker;