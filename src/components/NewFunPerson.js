import React from 'react'

const NewFunPerson = (removePerson) => {
    console.log('New Fun Person Added: ')
  return (
    <div className="column is-4">
        <div className="box content is-medium">
            <p>{this.state.name} is fun because he {this.state.reason}.</p>
            <button className="button is-link"
                    onClick={() => removePerson()}>Remove {this.state.name}</button>
        </div>
    </div>
  )
}

export default NewFunPerson
