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


// 
<button className="button is-link"
        onClick={() => removePerson()}>Remove {this.state.name}</button>