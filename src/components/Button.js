//import libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/mainCss';

// create a component
const Button = ({label, action, css}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text adjustsFontSizeToFit style={css ? css : styles.btnText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  css: PropTypes.object,
  action: PropTypes.func,
};

//make this component available to the app
export default Button;
