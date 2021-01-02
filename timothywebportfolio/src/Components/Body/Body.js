import React from 'react'
import Project from '../Project/Project'
import FirebaseTodo from '../../Photos/firebase-todo.png'
import KwitterLogin from '../../Photos/Kwitter-clone.png'
import HaikuPhoto from '../../Photos/thelivinghaikupic.png'
import Experiance from '../Experiance/Experiance'
import Breaker from '../Breaker/Breaker'
import './Body.css';
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''

function Body(){
    const todoapp1 = "A React & Material UI based todo-app that uses firebase and firebase's firestore database to CREATE, RETREIVE, UPDATE and DELETE data."
    const Kwitter = "Worked with a team of developers to build a React/Redux & Semantic UI based functional twitter clone with full user auth"

    const HaikuDes = "Worked with a team of developers to build a public Haiku website using React, Semantic UI, Firebase and React-Router where anyone can share Haiku's with the world! Also allows for the randomization of all haiku's in the database"

    return (
        <>
            <Experiance />
            <Breaker breaker='Front End Projects 🚀'/>
            <div className='exContainer'>
                <Project
                title="TodoApp Photo" 
                photo={FirebaseTodo} 
                project='Todo-App' 
                description={todoapp1}
                gitlink='https://github.com/TimothyReynoso/react-todo-app'
                weblink='https://react-todo-app-8160d.web.app/'
                />
                <Project
                title="KwitterPhoto" 
                photo={KwitterLogin} 
                project='Kwitter' 
                description={Kwitter}
                gitlink='https://github.com/TimothyReynoso/Kwitter'
                weblink='https://github.com/TimothyReynoso/Kwitter/blob/main/kwitter-clone-master/README.md'
                />
                <Project
                title="The Living Haiku Photo" 
                photo={HaikuPhoto} 
                project='The Living Haiku' 
                description={HaikuDes}
                gitlink='https://github.com/TimothyReynoso/Kwitter'
                weblink='https://the-living-haiku.web.app/'
                />
            </div>
            <Breaker breaker='Back End Projects 🚀'/>
            <div className='exContainer'>
                <Project
                title="Twitter Clone" 
                photo={FirebaseTodo} 
                project='Twitter Clone' 
                description={todoapp1}
                gitlink='https://github.com/TimothyReynoso/react-todo-app'
                weblink='https://react-todo-app-8160d.web.app/'
                />
                <Project
                title="SQL Manipulation" 
                photo={KwitterLogin} 
                project='SQL Manipulation' 
                description={Kwitter}
                gitlink='https://github.com/TimothyReynoso/Kwitter'
                weblink='https://github.com/TimothyReynoso/Kwitter/blob/main/kwitter-clone-master/README.md'
                />
                <Project
                title="Django Cowsay" 
                photo={HaikuPhoto} 
                project='Django Cowsay' 
                description={HaikuDes}
                gitlink='https://github.com/TimothyReynoso/Kwitter'
                weblink='https://the-living-haiku.web.app/'
                />
            </div>
           
        </>
    )
}

export default Body;