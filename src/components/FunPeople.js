import React, { Component } from 'react'

class FunPeople extends Component {
  render() {
    return (
    
    <section class="content">
        <h1 class="title">List of Fun People</h1>

        <div class="box">
            <form>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input type="text" id="nameInput" class="input is-medium" value=""/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Reason they are fun</label>
                    <div class="control">
                        <input type="text" class="input is-medium" value=""/>
                    </div>
                </div>
                <div class="field">
                    <input type="submit" class="button is-link is-medium is-disabled" disabled="" value="Add Fun Person"/>
                </div>

            </form>
        </div>

        <div class="columns">
            <div class="column is-4">
                <div class="box content is-medium">
                <p>Bill is fun because he likes to party.</p>
                <button class="button is-link">Remove Bill</button>
            </div>
        </div>

        <div class="column is-4">
            <div class="box content is-medium">
                <p>Billy is fun because he parties harder than Bill.</p>
                <button class="button is-link">Remove Billy</button>
            </div>
        </div>

        <div class="column is-4">
            <div class="box content is-medium">
                <p>William is fun because he doesn't party at all.</p>
                <button class="button is-link">Remove William</button>
            </div>
        </div>
        </div>
    </section>
    )
  }
}

export default FunPeople
