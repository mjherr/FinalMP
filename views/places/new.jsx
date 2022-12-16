const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <form method="POST" action="/places">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="name">Place Name</label>
                  <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="pic">Place Picture</label>
                  <input className="form-control" id="pic" name="pic" />
                </div>
              </div>
              <div className="form-group col-sm-4">
                  <label htmlFor="country">Country</label>
                  <input className="form-control" id="country" name="country" />
                </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="city">City</label>
                  <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="state">State</label>
                  <input className="form-control" id="state" name="state" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="founded">Date Visited</label>
                  <input type="number" className="form-control" id="visited" name="visited" defaultValue={new Date().getFullYear()} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="musts"></label>
                <input className="form-control" id="musts" name="musts" required />
              </div>
              <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form