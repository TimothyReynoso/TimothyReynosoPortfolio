import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Divider } from '@material-ui/core';
import JS from '../../Photos/J.png'
import Python from '../../Photos/768px-Python-logo-notext.svg.png'
import ReactJS from '../../Photos/1_cPh7ujRIfcHAy4kW2ADGOw.png'
import Django from '../../Photos/Django-Logo.png'
import FirebaseLogo from '../../Photos/firebase.png'
import CSS3 from '../../Photos/css3-logo.png'
import HTML5 from '../../Photos/HTML5_Logo.png'
import GIT from '../../Photos/Git_Logo.png'
import MaterialUI from '../../Photos/MaterialUI_Logo.png'
import NodeJS from '../../Photos/Node.js_logo.png'
import Terminal from '../../Photos/Terminal_Logo.png'
import MongoDB from '../../Photos/mongodb-logo.png'
import ReduxJS from '../../Photos/Redux.png'
// import  from '../../Photos/'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        // padding: theme.spacing(21),
        marginTop: theme.spacing(1),
        width: "100%",
        height: theme.spacing(60),
        backgroundColor: theme.palette.background.paper
      },
    },
  }));

function Header(){

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Paper id='paperContainer' elevation={3}> 
                <div id='paperDiv'>
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
                    <Divider id='divider'/>
                </div>
                <div id='logoBox'>
                   
                    <Logo logo={JS}/>
                    <Logo logo={CSS3}/>
                    <Logo logo={HTML5}/>
                    <Logo logo={Python}/>
                    <Logo logo={ReactJS}/>
                    <Logo logo={ReduxJS}/>
                    <Logo logo={Django}/>
                    <Logo logo={FirebaseLogo}/>
                    <Logo logo={GIT}/>
                    <Logo logo={MaterialUI}/>
                    <Logo logo={NodeJS}/>
                    <Logo logo={Terminal}/>
                    <Logo logo={MongoDB}/>
                </div>
            </Paper>
        </div>
    )
}

export default Header;