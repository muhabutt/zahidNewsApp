import {
	GET_NEWS, SET_COUNTRY_CODE, SET_LOADING, SET_CATEGORY
} from '../Actions/ActionTypes';

const initialState = {
	news: [],
	countryCode: '',
	category: '',
	timeZone: '',
	loading: true,
}

const NewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS:
			return {
				...state,
				...action.payload,
				news: action.payload.news,
				timeZone: action.payload.timeZone,
				refresh: action.payload.ref,
				loading: action.payload.loading,
				category: action.payload.category,
			}
		case SET_LOADING:
			return {
				...state,
				...action.payload,
				loading: action.payload.loading,
			}
		case SET_COUNTRY_CODE:
			return {
				...state,
				...action.payload,
				countryCode: action.payload.countryCode,
			}
		case SET_CATEGORY:
			return {
				...state,
				...action.payload,
				category: action.payload.category,
			}
		default: return state
	}
}

export default NewsReducer
