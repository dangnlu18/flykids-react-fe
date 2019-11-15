import React, { useEffect } from 'react';
import './App.css';
import { getTrips, addTraveler } from './actions/flykids';
import { connect } from 'react-redux';
import SignUp from './components/signUp';

function App(props) {
	
	useEffect(()=>{
		props.getTrips()
	}, [])

  return (
    <div className="App">
   		<h1>FLY KIDS</h1>
   		<h2>We make flying with kids easy</h2>
   		<SignUp addTraveler={props.addTraveler} />
    </div>
  );
}


function mapStateToProps(state){
	return{
		trips:state.trips
	}
}

const mapDispatchToProps = {
	getTrips,
	addTraveler
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
