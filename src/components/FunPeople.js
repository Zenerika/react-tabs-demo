import React, { Component } from 'react'
import NewFunPerson from './NewFunPerson'

class FunPeople extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         reason: '',
         add: false,
         remove: false
      }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeReason = this.handleChangeReason.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(e) {
        this.setState({name: e.target.value})
    }
    handleChangeReason(e) {
        this.setState({reason: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        if(this.state.name && this.state.reason) {
            this.setState({add: true})
        }
    }
    removePerson() {
        this.setState({remove: true})
        console.log('person removed')
    }

  
    render() {
    return (
        <section className="content">
            <h1 className="title">List of Fun People</h1>
            <div className="box">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" 
                                id="nameInput" 
                                className="input is-medium" 
                                onChange={(e) => this.handleChangeName(e)}
                                value={this.state.name}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Reason they are fun</label>
                        <div className="control">
                            <input type="text" 
                                className="input is-medium" 
                                onChange={(e) => this.handleChangeReason(e)}
                                value={this.state.reason}/>
                        </div>
                    </div>
                    <div className="field">
                        <input type="submit" 
                            className="button is-link is-medium is-disabled" 
                            disabled="" 
                            value="Add Fun Person"/>
                    </div>

                </form>
            </div>

            <div className="columns">
                {this.state.add ? <NewFunPerson nameVal={this.state.name}
                                                reasonVal={this.state.reason}/> : 
                <div className="columns">
                    <div className="column is-4">
                        <div className="box content is-medium">
                            <p>Bill is fun because he likes to party.</p>
                            <button className="button is-link">Remove Bill</button>
                        </div>
                        </div>

                        <div className="column is-4">
                        <div className="box content is-medium">
                            <p>Billy is fun because he parties harder than Bill.</p>
                            <button className="button is-link">Remove Billy</button>
                        </div>
                        </div>

                        <div className="column is-4">
                        <div className="box content is-medium">
                            <p>William is fun because he doesn't party at all.</p>
                            <button className="button is-link">Remove William</button>
                        </div>
                        </div>
                </div>}
            </div>
        </section>
    )
  }
}

export default FunPeople
