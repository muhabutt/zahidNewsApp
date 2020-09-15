//import libraries
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import styles from '../styles/mainCss';
import Menu from '../components/Menu';
import Constants from '../jsonFiles/Constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// create a component
const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const {foundNews} = props;

  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      <View style={[styles.headerHeight]}>
        <View
          style={[
            styles.flex1,
            styles.justify_content_center,
            styles.align_items_center,
            styles.flex_direction_row,
            styles.grayBackground,
          ]}>
          <View style={[styles.mlM8, {flex: 0.27}]}>
            <Image
              resizeMode="contain"
              source={Constants.images.logo}
              style={styles.logo}
            />
          </View>

          <View
            style={[
              {flex: 1},
              styles.justify_content_start,
              styles.align_items_start,
            ]}>
            <Text adjustsFontSizeToFit style={styles.logoHeading}>
              World News
            </Text>
            <Text adjustsFontSizeToFit style={styles.logoCaption}>
              Get latest news updates
            </Text>
          </View>

          <View
            style={[
              {flex: 0.3, paddingRight: 10},
              styles.justify_content_center,
              styles.align_items_end,
            ]}>
            <TouchableOpacity
              onPress={() => {
                toggleBox();
              }}>
              <FontAwesomeIcon icon={faBars} size={40} color={'#ffffff'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {visible ? (
        <View
          style={[
            styles.grayBackground,

            visible ? styles.openMenu : null,
            foundNews ? styles.flex1 : styles.dropDownHeight,
          ]}>
          <Menu toggleBox={toggleBox} />
        </View>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
};

export default Header;
