import React, { useEffect } from 'react';
import './App.css';
import { getTrips, addTraveler } from './actions/flykids';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SignUp from './components/signUp';
import SignUpAdmin from './components/signupAdmin'
import SignIn from './components/signin';
import Navbar from './components/navBar';
// import Trips from './components/TripsList'

function App(props) {
	
	useEffect(()=>{
		props.getTrips()
	}, [])

  return (
    <div className="App">
    	<h1>FLY KIDS</h1>
    	<h2>We make flying with kids easy</h2>
    	<Navbar />


   		<Route exact path ="/traveler-signup" render={()=><SignUp user={props.user} addTraveler={props.addTraveler}/>} />
   		<Route exact path ="/admin-signup" render={()=><SignUpAdmin user={props.user} addTraveler={props.addTraveler}/>} />

   		<Route exact path ="/signin" component={SignIn} />
   		


    </div>
  );
}


function mapStateToProps(state){
	return{
		trips:state.trips,
		user: state.user,
	}
}

const mapDispatchToProps = {
	getTrips,
	addTraveler
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// <SignUp user={props.user} addTraveler={props.addTraveler} />
   		// <Route exact path ="/trips" component={TripsList} />