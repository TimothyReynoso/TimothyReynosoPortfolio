import React from 'react'
import Project from '../Project/Project'
import ReduxJS from '../../Photos/Redux.png'
import Experiance from '../Experiance/Experiance'
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''

function Body(){
    const description = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    return (
        <>
            <Experiance />
            <Project
            title="Alt Title" 
            photo={ReduxJS} 
            project='Todo-App' 
            description={description}
            gitlink='https://github.com/TimothyReynoso/react-todo-app'
            weblink='https://react-todo-app-8160d.web.app/'
            />
        </>
    )
}

export default Body;