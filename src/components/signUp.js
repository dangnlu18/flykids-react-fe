import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




export default function SignUp(props){
	const history = useHistory();

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
		history.push('/signin')
	}

	const handleClick = e =>{
		e.preventDefault();
		history.push('/')
	}

	return(
		<div className='container' >
			<form onSubmit={handleSubmit}>
				<h1>New Traveler Sign Up</h1>
				<input type='text' name="first_name" value={newUser.first_name} placeholder='first name' onChange={handleChange}/> <br/>
				<input type='text' name="last_name" value={newUser.last_name} placeholder='last name' onChange={handleChange}/><br/>
				<input type='text' name="email" value={newUser.email} placeholder='email' onChange={handleChange}/><br/>
				<input type='text' name="phone" value={newUser.phone} placeholder='phone number' onChange={handleChange}/><br/>
				<input type='password' name="password" value={newUser.password} placeholder='password' onChange={handleChange}/><br/><br/>
				<button> Sign Up</button>
				<button className='start-over' onClick={handleClick}> Start Over </button>

			</form>
			
		</div>
		)
}