import { FETCH_TRIPS, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR } from '../actions/flykids'; 


const initialState = {
	trips:[],
	user: {
		first_name:'',
		last_name:'',
		email:'',
		phone:'',
		password:'',
		is_admin: 0

	},
	isLoading: false,
	error: null
}

export function reducer(state=initialState, action){
	switch(action.type){
		case FETCH_TRIPS:
			return{
				...state,
				isLoading: true
			}
		case FETCH_TRIPS_SUCCESS:
			return{
				...state,
				trips: [...action.payload],
				isLoading: false
			}
		case FETCH_TRIPS_ERROR:
			return{
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}