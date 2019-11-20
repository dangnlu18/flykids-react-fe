import React, { useState, useEffect } from "react";
import TripContainer from "./TripContainer";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function TripList(props) {
	const history = useHistory();
    const [trips ] = useState(props.trips)

    useEffect(()=>{
    	props.getTrips();

    },[])

	const handleClick = e =>{
		e.preventDefault();
		history.push('/add-trip')
	}

    return (
        <div>
            {trips.map(trip => {
                return(
                    <TripContainer 
                        key={trip.id}
                        trip={trip}

                    />
                )
            })}
            <button onClick={handleClick}>Add New Trip</button>
        </div>
    )
}

function mapStateToProps(state){
	return{
		trips:state.trips,
	}
}

export default connect(mapStateToProps)(TripList);