import React from 'react'
const Projects = ({name,url="https://github.com/abdullah16aug?tab=repositories",colors}) => {

  return (
    <>
 
     <div class={`tile ${colors}`}>
       <h1 class="tile-marker">{name}</h1>
     </div>
    
    </>
  )
}

export default Projects