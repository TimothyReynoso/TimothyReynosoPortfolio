import React from 'react'
import Project from '../Project/Project'

function Body(){
    const description = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    return (
        <>
            <Project project='Here' description={description}/>
        </>
    )
}

export default Body;