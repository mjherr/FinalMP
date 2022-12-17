const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Travel Log</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Visited</label>
                        <input className="form-control" id="place" name="place" value={data.place.place} required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" id="country" name="country" value={data.place.country} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.place.city} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.place.state} />
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="fave">Favorite Things</label>
                    <input className="form-control" id="fave" name="fave" value={data.place.fave} required />
                </div>
                <input className="btn btn-primary" type="submit" value="Edit Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form