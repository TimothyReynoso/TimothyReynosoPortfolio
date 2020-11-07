import React from 'react'
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        padding: theme.spacing(21),
        marginTop: theme.spacing(1),
        width: "100%",
        height: theme.spacing('auto'),
      },
    },
  }));

function Header(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper id='paperDiv' elevation={3}> 
                <Typography id='lineOne' variant="h5" component="h5">
                    Hi, my name is
                </Typography>
                <Typography id='lineTwo'variant="h2" component="h2">
                    Timothy Reynoso
                </Typography>
                <Typography id='lineThree' variant="h3" component="h3">
                    I Build Things For The Web
                </Typography>
                <Typography id='lineFour' variant="h7" component="h7">
                    I create quality web and software appliacations using modern techonogies and frameworks like JavaScript ES6, Python 3 & 2, React, Django, HTML 5 and CSS3
                </Typography>
            </Paper>
        </div>
    )
}

export default Header;