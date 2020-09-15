import {
  GET_NEWS,
  SET_COUNTRY_CODE,
  SET_LOADING,
  SET_CATEGORY,
} from '../Actions/ActionTypes';

const initialState = {
  news: [],
  countryCode: '',
  category: '',
  timeZone: '',
  loading: true,
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        countryCode: action.payload.countryCode,
        loading: action.payload.loading,
        category: action.payload.category,
        timeZone: action.payload.timeZone,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case SET_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload.countryCode,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    default:
      return state;
  }
};

export default NewsReducer;
