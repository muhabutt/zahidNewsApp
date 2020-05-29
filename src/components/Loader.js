//import liraries
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles/mainCss';

// create a component
const Loader = () => {
  return (
    <View
      style={[
        styles.flex1,
        styles.justify_content_center,
        styles.align_items_center,
        styles.loaderScreen,
      ]}
    />
  );
};

//make this component available to the app
export default Loader;
