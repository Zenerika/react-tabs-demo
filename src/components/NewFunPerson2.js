import React, { Component } from 'react'

class NewFunPerson extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render({nameVal, reasonVal, removePerson}) {
    console.log('New Person: ', nameVal, reasonVal)
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
}

export default NewFunPerson
