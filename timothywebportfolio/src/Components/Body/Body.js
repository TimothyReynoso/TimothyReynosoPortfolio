import React from 'react'
import Project from '../Project/Project'
import FirebaseTodo from '../../Photos/firebase-todo.png'
import KwitterLogin from '../../Photos/Kwitter-clone.png'
import HaikuPhoto from '../../Photos/thelivinghaikupic.png'
import TwitterClone from '../../Photos/Twitter-Clone.png'
import SQLDEMO from '../../Photos/SQL-demo.png'
import Cowsay from '../../Photos/cowsay.png'
import Pyxz from '../../Photos/pyxzhome.png'
import Experiance from '../Experiance/Experiance'
import Breaker from '../Breaker/Breaker'
import { makeStyles } from '@material-ui/core/styles';
import './Body.css';
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        // padding: theme.spacing(21),
        marginTop: theme.spacing(1),
        width: "100%",
        height: theme.spacing('auto'),
        backgroundColor: theme.palette.background.paper
      },
    },
  }));

function Body(){
    //Front-End
    const todoapp1 = "A React & Material UI based todo-app that uses firebase and firebase's firestore database to CREATE, RETREIVE, UPDATE and DELETE data."
    const Kwitter = "Worked with a team of developers to build a React/Redux & Semantic UI based functional twitter clone with full user authorizations"
    const HaikuDes = "Worked with a team of developers to build a public Haiku website using React, Semantic UI, Firebase and React-Router where anyone can share Haiku's with the world! Also allows for the randomization of all haiku's in the database"
    //Back-End
    const TwitterCloneDes = "A Django based twitter clone with full funcationallity including; following and unfollowing users, sign-up new users, count of followers and tweets, new tweets appears (after a page refresh) for all accounts that follow the user. If a user mentions another through the @ syntax; that user receives a notification (after page refresh), Users get redirected to /login/ when attempting to load the homepage without being logged in."
    const SqlMani = "Wrote a Python script to connect to a sqlite database, Using the Mimesis package for Python to generate 500 new user accounts, create 1000 tweets and 200 notifications than insert them into the database."
    const CowDes = "Built a Django server that passes user input to the operating system, runs a command, retrieves the output, and sends it back to the client. This was accomplished using the model to back up a copy of what people submit to the page, and had a second endpoint at /history where it listed the last ten things that were sent through the form. Also re-renders the homepage with a fresh form and the output from the Cowsay utility."
    const PyxzDes = 'Built a social media Web-App MVP with a team of 4 in 2 weeks. Using Django, HTML, CSS and Materialize CSS Framework Built with full auth, login, sign-up, posting images, comments, tags to images, sub-categories with images based on created tags, follow users, users you follow page, unique randomization and stories (similar to Snapchat) that only last 24 HOURS!'

    const classes = useStyles();
    
    return (
        <>
            <div className={classes.root}>
                <Experiance />
            </div>
            <Breaker breaker='Front End Projects 🚀'/>
            <div className='exContainer'>
                <div className='here'>
                    <Project
                    title="TodoApp Photo" 
                    photo={FirebaseTodo} 
                    project='Todo-App' 
                    description={todoapp1}
                    gitlink='https://github.com/TimothyReynoso/react-todo-app'
                    weblink='https://react-todo-app-8160d.web.app/'
                    />
                </div>
                <div className='here'>
                    <Project
                    title="KwitterPhoto" 
                    photo={KwitterLogin} 
                    project='Kwitter' 
                    description={Kwitter}
                    gitlink='https://github.com/TimothyReynoso/Kwitter'
                    weblink='https://github.com/TimothyReynoso/Kwitter/blob/main/kwitter-clone-master/README.md'
                    />
                </div>
                <div className='here'>
                    <Project
                    title="The Living Haiku Photo" 
                    photo={HaikuPhoto} 
                    project='The Living Haiku' 
                    description={HaikuDes}
                    gitlink='https://github.com/TimothyReynoso/Kwitter'
                    weblink='https://the-living-haiku.web.app/'
                    />
                </div>
            </div>
            <Breaker breaker='Back End Projects 🚀'/>
            <div className='exContainer'>
                <div className='here'>
                    <Project
                    title="Pyxz Social Media ⭐️" 
                    photo={Pyxz} 
                    project='Pyxz Social Media ⭐️' 
                    description={PyxzDes}
                    gitlink='https://github.com/tiree24/Pyxz'
                    weblink=''
                    />
                </div>
                <div className='here'>
                    <Project
                    title="Twitter Clone" 
                    photo={TwitterClone} 
                    project='Twitter Clone' 
                    description={TwitterCloneDes}
                    gitlink='https://github.com/TimothyReynoso/Django-Twitter-Clone/tree/master/twitterclone-TimothyReynoso-main'
                    weblink=''
                    />
                </div>
                <div className='here'>
                    <Project
                    title="SQL Manipulation" 
                    photo={SQLDEMO} 
                    project='SQL Manipulation' 
                    description={SqlMani}
                    gitlink='https://github.com/TimothyReynoso/Django-Twitter-SQL-Manipulation'
                    weblink=''
                    />
                </div>
                <div className='here'>
                    <Project
                    title="Django Cowsay" 
                    photo={Cowsay} 
                    project='Django Cowsay' 
                    description={CowDes}
                    gitlink='https://github.com/TimothyReynoso/Django-Cowsay/tree/master'
                    weblink=''
                    />
                </div>
            </div>
           
        </>
    )
}

export default Body;