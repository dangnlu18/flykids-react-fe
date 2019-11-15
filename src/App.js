import React, {useState, useEffect } from 'react';
import './App.css';
import { getTrips } from './actions/flykids';
import { connect } from 'react-redux';

function App(props) {
	
	useEffect(()=>{
		props.getTrips()
	}, [])

  return (
    <div className="App">
   		<h1>FLY KIDS</h1>
   		<h2>We make flying with kids easy</h2>
    </div>
  );
}


function mapStateToProps(state){
	return{
		trips:state.trips
	}
}

const mapDispatchToProps = {
	getTrips
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
