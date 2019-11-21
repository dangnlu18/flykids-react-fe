import React, { useState, useEffect } from "react";
import TripContainer from "./TripContainer";
import { getTrips } from '../actions/flykids';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function TripList(props) {
	const history = useHistory();
    const [trips ] = useState(props.trips)

    useEffect(()=>{
    	props.getTrips();

    },[props.trips.length])

	const handleClick = e =>{
		e.preventDefault();
		history.push('/add-trip')
	}

	 if (!trips) {
	    return <h1>Loading </h1>
	  } else {
	    return (
	      <div>
	        {props.trips.map(trip => {
	          return <TripContainer key={trip.id} trip={trip} />
	        })}
	        <button onClick={handleClick}>Add New Trip</button>
	      </div>
	    )
	  }
}

function mapStateToProps(state){
	return{
		trips:state.trips,
	}
}

const mapDispatchToProps = {
	getTrips,
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);