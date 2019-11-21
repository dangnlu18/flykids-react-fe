import React, {useState} from "react";
import api from '../utils/api'
import { useHistory } from 'react-router-dom';


const TripContainer = props => {
	const history = useHistory();
	const [ editing, setEditing ] = useState(false);
	const [ updateTrip, setUpdateTrip ] = useState({
		airport: "",
		airline: "",
		departure_time: '',
		kids: '',
		is_arriving:'' 
	})
	const handleDelete = e =>{
		e.preventDefault();
		api().delete(`/trips/${props.trip.id}`)
			.then((resp)=>window.location.reload())
			.catch((err)=>console.log(err))
	}
	
	const saveEdit = e =>{
		e.preventDefault();	
	}

	const editTrip = () =>{
		history.push(`/edit/${props.trip.id}`)
	}


    return(
        <div className="trips">
            <div className="trip-detail">
                <p>Airport: {props.trip.airport}</p>
                <p>Airline: {props.trip.airline}</p>
                <p>Number of kids: {props.trip.kids}</p>
                <p>Airline: {props.trip.airline}</p>
            </div>
            <div className="trip-btns">
				<button onClick={editTrip}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
            </div>

        </div>
    );
};

export default TripContainer;