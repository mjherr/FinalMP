const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/river-scene-buildings.jpg" alt="Beautiful River Scene" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@tompodmore86?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Podmore</a> on <a href="https://unsplash.com/t/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home
