import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddTrip(props){
	const history = useHistory();
	const [newTrip, setNewTrip] = useState({
	    airport: "",
	    airline: "",
	    departure_time: '',
	    kids: '',
	    is_arriving: ''             
	})

	const handleChange = e =>{
		setNewTrip({
			...newTrip,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault();
		props.addTrip();
		setTimeout(()=>{
			history.push('/trips', 3000)
		})
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type="text" name="airport" placeholder="airport" value={newTrip.airport} onChange={handleChange} />
			<input type="text" name="airline" placeholder="airline" value={newTrip.airline} onChange={handleChange} />
			<input type="text" name="departure_time" placeholder="departure_time" value={newTrip.departure_time} onChange={handleChange} />
			<input type="text" name="kids" placeholder="kids" value={newTrip.kids} onChange={handleChange} />
			<input type="text" name="is_arriving" placeholder="is_arriving" value={newTrip.is_arriving} onChange={handleChange} />
			<button>Add Trip</button>
		</form>
	)
}