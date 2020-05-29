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
import styles from '../styles/mainCss';
import SubCategories from '../jsonFiles/SubCategories';
import DropDown from '../components/DropDown';

// create a component
const Menu = ({
  setCountry,
  countryCode,
  fetchHeadlines,
  getLoader,
  setVisible,
  visible,
}) => {
  const getCategories = () => {
    let cat = SubCategories.categories;
    return cat.map((item, key) => (
      <TouchableOpacity
        key={key}
        onPress={() => {
          getLoader();
          fetchHeadlines(countryCode, item.name);
          setVisible(!visible);
        }}>
        <Text style={[styles.article_anchor, styles.white]}>
          {item.name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View style={[styles.grayBackground, styles.flex1]}>
      <DropDown
        setCountry={setCountry}
        countryCode={countryCode}
        fetchHeadlines={fetchHeadlines}
        getLoader={getLoader}
        setVisible={setVisible}
        visibile={visible}
      />
      <SafeAreaView style={[styles.flex1, styles.pl15, styles.pr15]}>
        <ScrollView>{getCategories()}</ScrollView>
      </SafeAreaView>
    </View>
  );
};
Menu.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  setCountry: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  getLoader: PropTypes.func.isRequired,
  fetchHeadlines: PropTypes.func.isRequired,
};

//make this component available to the app
export default Menu;
