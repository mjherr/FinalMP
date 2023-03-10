const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.place}</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-dark"> 
            Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-dark">
                Delete
            </button>
            </form>     


          </main>
        </Def>
    )
}

module.exports = show
