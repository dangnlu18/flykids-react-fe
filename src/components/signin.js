import React, {useState} from 'react';
import api from '../utils/api';




export default function SignIn(props){
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

	const handleSubmit = async e =>{
		e.preventDefault();
		console.log(user)
		api().post('/login', user)
			.then((resp)=>console.log(resp))
			.catch((err)=>console.log(err.response))
		}
		// const URL ="http://kids-fly-backend.herokuapp.com/login"

		// const response = await fetch(URL, {
		//   method: 'GET', // *GET, POST, PUT, DELETE, etc.
		//   headers: {
		//     'Content-Type': 'application/json'
		//     // 'Content-Type': 'application/x-www-form-urlencoded',
		//   },
		//   body: JSON.stringify(user)}
		//   const result = await response.json()
		//   console.log(result)

		// let xhr = new XMLHttpRequest();
		// xhr.open("GET", URL)
		// xhr.send(user)

		// xhr.onload = function() {
		//   if (xhr.status != 200) { // analyze HTTP status of the response
		//     console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		//   } else { // show the result
		//     console.log(`Done, got ${xhr.response} bytes`); // responseText is the server
		//   }
		// };

		// xhr.onprogress = function(event) {
		//   if (event.lengthComputable) {
		//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
		//   } else {
		//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
		//   }

		// };

		// xhr.onerror = function() {
		//   console.log("Request failed");
		// 	}}

	return(
		<form onSubmit={handleSubmit}>
			<input type='text' name="email" value={user.email} placeholder='email' onChange={handleChange}/><br/>
			<input type='password' name="password" value={user.password} placeholder='password' onChange={handleChange}/><br/>
			<button> Log In</button>
		</form>
		)
}