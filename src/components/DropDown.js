//import libraries
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from '../styles/mainCss';
import Countries from '../jsonFiles/Countries';
import Loader from './Loader';

// create a component
const DropDown = (props) => {
    const {
        countryCode,
        getNews,
        setVisible
    } = props;
  return (
      countryCode
        ?
          <View style={styles.dropDownContainer}>
              <Picker
                  selectedValue={countryCode}
                  onValueChange={(itemValue) => {
                      getNews(itemValue);
                      setVisible(false);
                  }}>
                  {Countries.countriesList.map((item, index) => {
                      return (
                          <Picker.Item
                              key={index}
                              label={item.name}
                              value={item.code.toLowerCase()}
                          />
                      );
                  })}
              </Picker>
          </View>
        :
          <Loader/>
  );
};

DropDown.propTypes = {
  getNews: PropTypes.func.isRequired,
  countryCode: PropTypes.string,
  setVisible: PropTypes.func.isRequired,
};
//make this component available to the app

const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.countryCode === nextProps.countryCode
    );
};
const dropDown = memo(DropDown, areEqual);

export default dropDown;
