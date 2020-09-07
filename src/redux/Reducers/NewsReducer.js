import {
	GET_NEWS
} from '../Actions/ActionTypes'

const initialState = {
	news: null
}

const NewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS:
			return {
				...state,
				...action.payload,
				news: action.payload.news
			}
		default: return state
	}
}

export default NewsReducer
