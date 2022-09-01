const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <h2>Rating</h2>
                <p>Not Rated</p>
            </div>
            <h3>Located in {data.place.city}, {data.place.state} </h3>
            <div>
                <h2>Description</h2>
                <h3>
                {data.place.showEstablished() }
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger"> Delete </button>
            </form> 
          </main>

        </Def>
    )
}

module.exports = show
