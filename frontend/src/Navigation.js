import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation () {
    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)


    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

//     return (
//         <html>
//             <head>
//                 <title>¡HOLA! TRAVEL LOG APP</title>
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
//                 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
//                 crossOrigin="anonymous"/>
//                 <link rel="stylesheet" href="/css/style.css" />
//             </head>
//             <body>
//                 <nav className="navbar navbar-dark bg-dark">
                
//                     <ul>
//                         <li>
//                             <a href="/">Home</a>
//                         </li>
//                         <li>
//                             <a href="/places">Places</a>
//                         </li>
//                         <li>
//                             <a href="/places/new">Post New Log</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 {html.children}
//             </body>
//         </html>
//     )
//   }

export default Navigation;