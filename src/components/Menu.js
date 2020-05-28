//import libraries
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Button from './Button';
import styles from '../styles/mainCss';
import SubCategories from '../jsonFiles/SubCategories';
import DropDown from '../components/DropDown';

// create a component
const Menu = ({
  setCountry,
  countryCode,
  fetchHeadlines,
  getCategories,
  getLoader,
}) => {
  return (
    <View style={[styles.grayBackground, styles.flex1]}>
      <DropDown
        setCountry={setCountry}
        countryCode={countryCode}
        fetchHeadlines={fetchHeadlines}
        getLoader={getLoader}
      />
      <SafeAreaView style={[styles.flex1, styles.pl15, styles.pr15]}>
        <ScrollView>{getCategories()}</ScrollView>
      </SafeAreaView>
    </View>
  );
};
//make this component available to the app
export default Menu;
