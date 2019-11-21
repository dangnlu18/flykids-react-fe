import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

export default function EditTrip(props){
	const history = useHistory();
	const [tripInfo, setTripInfo] = useState({
		airport: "",
		airline: "",
		departure_time: '',
		kids: '',
		is_arriving:'' 
	})
	const [updateTrip, setUpdateTrip] = useState({
	    airport: "",
	    airline: "",
	    departure_time: '',
	    kids: '',
	    is_arriving:''             
	})

		
	console.log(props)

	useEffect(()=>{
		api()
			.get(`/trips/${props.match.params.id}`)
			.then((res)=> setTripInfo(res.data))
			.catch((err)=> console.log(err.response))
	},[props.match.params.id])




	const handleChange = e =>{
		setUpdateTrip({
			...updateTrip,
			[e.target.name]: e.target.value
		})
	}


	const handleSubmit = e =>{
		e.preventDefault()
		api()
		.put(`/trips/${props.match.params.id}`, updateTrip)
		.then((res)=> props.history.push('/trips'))
		.catch((err)=> console.log(err))

	}

	return(
		<form onSubmit={handleSubmit}>
			<h1>Edit Your Trip</h1>
			<input type="text" name="airport" placeholder="new airport" value={updateTrip.airport} onChange={handleChange} />
			<input type="text" name="airline" placeholder="new airline" value={updateTrip.airline} onChange={handleChange} />
			<input type="text" name="departure_time" placeholder="new departure_time" value={updateTrip.departure_time} onChange={handleChange} />
			<input type="text" name="kids" placeholder="new kids" value={updateTrip.kids} onChange={handleChange} />
			<input type="text" name="is_arriving" placeholder="new is_arriving" value={updateTrip.is_arriving} onChange={handleChange} />
			<button>Save Edits</button>
		</form>
	)
}