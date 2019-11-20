import React, { useState, useEffect } from "react";
import TripContainer from "./TripContainer";
import { useHistory } from 'react-router-dom';

export default function TripList(props) {
	const history = useHistory();
    const [trips ] = useState([{name:'dang', description: 'flight to texas', id:1},{name:'rob', description: 'flight to hawaii', id:2},{name:'ava', description: 'flight to portland', id:3}]);

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