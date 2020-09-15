//import libraries
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from '../styles/mainCss';
import Countries from '../jsonFiles/Countries';
import {connect} from 'react-redux';
import {getNews} from '../redux/Actions';

// create a component
const DropDown = (props) => {
  const {countryCode, getNews, toggleBox} = props;
  return (
    <View style={styles.dropDownContainer}>
      <Picker
        selectedValue={countryCode}
        onValueChange={(itemValue) => {
          toggleBox();
          getNews(itemValue);
        }}>
        {Countries.countriesList.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.name} value={item.code} />
          );
        })}
      </Picker>
    </View>
  );
};

DropDown.propTypes = {
  getNews: PropTypes.func.isRequired,
  countryCode: PropTypes.string,
  toggleBox: PropTypes.func.isRequired,
};
//make this component available to the app

const mapStateToProps = (state) => {
  return {
    countryCode: state.news.countryCode,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getNews: (countryCode) => {
    dispatch(getNews(countryCode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
