import React, { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { getTrips, addTraveler, addTrip } from './actions/flykids'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SignUp from './components/signUp'
import SignUpAdmin from './components/signupAdmin'
import SignIn from './components/signin'
import Navbar from './components/navBar'
import TripsList from './components/TripsList'
import AddTrip from './components/AddTrip'

function App(props) {
  return (
    <div className='App'>
      <Navigation />
      <h1>FLY KIDS</h1>
      <h2>We make flying with kids easy</h2>
      <Route exact path='/' component={Navbar} />
      <Route
        exact
        path='/traveler-signup'
        render={() => (
          <SignUp user={props.user} addTraveler={props.addTraveler} />
        )}
      />
      <Route
        exact
        path='/admin-signup'
        render={() => (
          <SignUpAdmin user={props.user} addTraveler={props.addTraveler} />
        )}
      />
      <Route
        exact
        path='/trips'
        render={() => <TripsList getTrips={props.getTrips} />}
      />
      <Route exact path='/signin' component={SignIn} />
      <Route
        exact
        path='/add-trip'
        render={() => <AddTrip addTrip={props.addTrip} />}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    trips: state.trips,
    user: state.user
  }
}

const mapDispatchToProps = {
  getTrips,
  addTraveler,
  addTrip
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// <SignUp user={props.user} addTraveler={props.addTraveler} />
