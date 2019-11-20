import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(){
	return(
		<nav className='navbar'>
			<Link to="/traveler-signup">Travelers</Link>
			<Link to="/admin-signup">Admins</Link>
		</nav>
	)
}