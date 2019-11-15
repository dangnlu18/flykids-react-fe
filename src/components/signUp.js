import React, { useState } from 'react';
import api from '../utils/api';

export default function SignUp(props){
	const [ newUser, setNewUser ] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		password: "",
		is_admin: 0
	})

	const handleChange = e => {
		setNewUser({
			...newUser, 
			[e.target.name]: e.target.value
			})
	}

	const handleSubmit = e =>{
		e.preventDefault();
		props.addTraveler(newUser)
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type='text' name="first_name" value={newUser.first_name} placeholder='First Name' onChange={handleChange}/> <br/>
			<input type='text' name="last_name" value={newUser.last_name} placeholder='Last Name' onChange={handleChange}/><br/>
			<input type='text' name="email" value={newUser.email} placeholder='email' onChange={handleChange}/><br/>
			<input type='text' name="phone" value={newUser.phone} placeholder='Phone Number' onChange={handleChange}/><br/>
			<input type='text' name="password" value={newUser.password} placeholder='password' onChange={handleChange}/><br/>
			<button> Sign Up</button>
		</form>
		)
}