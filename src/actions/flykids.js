import api from '../utils/api'


export const FETCH_TRIPS = 'FETCH_TRIPS';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_ERROR = 'FETCH_TRIPS_ERROR';
export const ADD_TRAVELER = 'ADD_TRAVELER'

export function getTrips(){
	return(dispatch) => {
		dispatch({type: FETCH_TRIPS})

		api().get('/trips')
			.then((resp)=>{
				console.log(resp)
				localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkFkbWluIiwibGFzdF9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6IkFkbWluIiwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJwYXNzd29yZCI6IkFkbWluIiwiaXNfYWRtaW4iOjEsImFpcnBvcnQiOiJEZW')
				dispatch({type:FETCH_TRIPS_SUCCESS, payload: resp})
			})
			.catch((err)=>console.log(err))
	}
}


export function addTraveler(item){
	return (dispatch)=>{
		dispatch({type: FETCH_TRIPS })

		api().post('/users', item)
			.then((res)=>{
				console.log(res)

			})
			.catch((err)=>{
				dispatch({type: FETCH_TRIPS_ERROR, payload: err.response.data})
			})


	}
}