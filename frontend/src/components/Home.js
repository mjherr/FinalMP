// const React = require('react')
// const Def = require('./default')

function Home () {
    return (
            <main>
                <h1>¡HOLA! Travel Log</h1>
                <div>
                    <img height="300" width="500" src="/images/river-scene-buildings.jpg" alt="Beautiful River Scene" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@tompodmore86?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Podmore</a> on <a href="https://unsplash.com/t/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-dark">Places Page</button>
                </a>
            </main>
    )
}

export default Home;