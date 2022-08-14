const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="https://placekitten.com/400/400" alt="silly kitty"/>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
