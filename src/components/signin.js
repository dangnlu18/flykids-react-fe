import React, {useState} from 'react';
import api from '../utils/api';
import { useHistory } from 'react-router-dom';



export default function SignIn(props){
	const history = useHistory();
	const [ user, setUser ] = useState({
		"email": "",
		"password": "",
	})

	const handleChange = e => {
		setUser({
			...user, 
			[e.target.name]: e.target.value
			})
	}

	const handleSubmit = e =>{
		e.preventDefault();
		console.log(user)
		api().post('/login', user)
			.then((resp)=>{
			localStorage.setItem('token', resp.data.token)
			history.push('/trips')


		})
			.catch((err)=>console.log(err.response))
		}

	return(
		<form onSubmit={handleSubmit}>
			<input type='text' name="email" value={user.email} placeholder='email' onChange={handleChange}/><br/>
			<input type='password' name="password" value={user.password} placeholder='password' onChange={handleChange}/><br/>
			<button> Log In</button>
		</form>
		)
}