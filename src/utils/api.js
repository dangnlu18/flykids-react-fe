import axios from 'axios';

const config = {
	baseURL: "https://webptct.herokuapp.com",
}

const token = localStorage.getItem('token');

if(token){
	config.headers = {
			Authorization: token,
		}
}

export default function api(){

	return axios.create(config)
	
		}
	
