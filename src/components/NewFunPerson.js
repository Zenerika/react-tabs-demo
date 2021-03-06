import React from 'react'

const NewFunPerson = ({nameVal, reasonVal, removePerson}) => {
  return (
    <div className="column is-4">
        <div className="box content is-medium">
            <p>{nameVal} is fun because he {reasonVal}.</p>
            <button className="button is-link"
                    onClick={() => removePerson()}>Remove {nameVal}</button>
        </div>
    </div>
  )
}

export default NewFunPerson
