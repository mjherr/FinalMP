

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import PlaceIndex from './places/PlaceIndex'
// import PlaceDetails from './places/PlaceDetails'
import Navigation from './Navigation'
import Error404 from './components/Error404'
import NewPlaceForm from './places/NewPlaceForm'
import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './contexts/users/SignUpForm'
import LoginForm from './contexts/users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/places" component={PlaceIndex} />
          <Route exact path="/places/new" component={NewPlaceForm} />
          {/* <Route exact path="/places/:placeId" component={PlaceDetails} />
          <Route exact path="/places/:placeId/edit" component={EditPlaceForm} /> */}
          <Route path="/" component={Error404} />
      </CurrentUserProvider>
  );
}

export default App;