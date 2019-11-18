import React, { useEffect } from 'react';
import './App.css';
import { getTrips, addTraveler } from './actions/flykids';
import { connect } from 'react-redux';
import SignUp from './components/signUp';
import SignIn from './components/signin'

function App(props) {
	
	useEffect(()=>{
		props.getTrips()
	}, [])

  return (
    <div className="App">
   		<h1>FLY KIDS</h1>
   		<h2>We make flying with kids easy</h2>
   		<SignUp user={props.user} addTraveler={props.addTraveler} />
   		<SignIn />
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
