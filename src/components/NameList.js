import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id : 1,
            name : 'Smith',
            age : 23,
            skill : 'Angular'
        },
        {
            id : 2,
            name : 'Clark',
            age : 27,
            skill : 'javascript'
        },
        {
            id : 3,
            name : 'Jenny',
            age : 25,
            skill : 'Java'
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
  return (<div>{personList}</div>)
}

export default NameList