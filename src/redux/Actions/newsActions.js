import {GET_NEWS, SET_COUNTRY_CODE, SET_LOADING} from './ActionTypes';
import Constants from '../../jsonFiles/Constants';
import {searchWords} from '../../helpers/functions';
import * as RNLocalize from 'react-native-localize';
import Countries from '../../jsonFiles/Countries';

export const getNews = (countryCode, category) => {
  return (dispatch) => {
    const payLoad = {
      loading: true,
    };
    dispatch({
      type: SET_LOADING,
      payload: payLoad,
    });

    let url, timeZone;
    let countryNames = Countries.countriesList;
    if (!countryCode) {
      RNLocalize.getLocales().map((item) => {
        countryCode = item.countryCode;
      });
    }

    countryNames.map((item, index) => {
      if (countryCode.toUpperCase() === item.code.toUpperCase()) {
        timeZone = item.name;
      }
    });

    if (!category) {
      category = '';
    }

    url = `${Constants.url}top-headlines?country=${countryCode}&category=${category}&apiKey=${Constants.apiKey}`;
    if (countryCode) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          return responseJson.articles.filter(
            (article) => !searchWords(article),
          );
        })
        .then((json) => {
          const payLoad = {
            news: json,
            countryCode: countryCode.toUpperCase(),
            loading: false,
            category: category,
            timeZone: timeZone,
          };
          dispatch({
            type: GET_NEWS,
            payload: payLoad,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
};

export const setLoading = (value) => {
  return (dispatch) => {
    const payLoad = {
      loading: value,
    };

    dispatch({
      type: SET_LOADING,
      payload: payLoad,
    });
  };
};

export const setCountryCode = (value) => {
  return (dispatch) => {
    const payLoad = {
      countryCode: value,
    };

    dispatch({
      type: SET_COUNTRY_CODE,
      payload: payLoad,
    });
  };
};

export const setCategory = (value) => {
  return (dispatch) => {
    const payLoad = {
      category: value,
    };

    dispatch({
      type: SET_COUNTRY_CODE,
      payload: payLoad,
    });
  };
};
