import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/mainCss';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={[
        styles.button,
        styles.ml15,
        styles.justify_content_center,
        styles.align_items_center,
        styles.headerBackButton,
      ]}>
      <Text style={[styles.btnText]}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
