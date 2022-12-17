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
            <h1>¡HOLA! Create a New Entry</h1>
            {message}
            <form method="POST" action="/places">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="place">¡HOLA! Create New Travel Entry</label>
                  <input className="form-control" id="place" name="place" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="pic">Picture</label>
                  <input type="url" id="pic" name="pic" />
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
                </div>
              <div className="form-group">
                <label htmlFor="fave">Favorite Things</label>
                <input className="form-control" id="fave" name="fave" required />
              </div>
              <input className="btn btn-primary" type="submit" value="Create New Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form