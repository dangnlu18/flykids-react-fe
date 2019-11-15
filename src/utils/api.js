import axios from 'axios';

export default function api(){
	return axios.create({
		baseURL: "https://kids-fly-backend.herokuapp.com",
		headers:{
			Authorization: localStorage.getItem('token'),
		},
	})
}