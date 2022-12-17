const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`} >
              {place.place}
            </a>
          </h2>
          <p className="text-center">
            {place.musts}
          </p>
          <img src={place.picture} alt={place.place} />
          <p className="text-center">
            Located in {place.country}, {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places Visited</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index
  