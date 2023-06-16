import React from 'react'

function Person({person}) {
  return (
    <div><h2>Hey, I am {person.name}. I am {person.age} years old. I work on {person.skill}.</h2></div>
  )
}

export default Person