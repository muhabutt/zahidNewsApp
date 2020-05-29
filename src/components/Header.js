//import libraries
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/mainCss';
import Menu from '../components/Menu';
import Constants from '../jsonFiles/Constants';
import Fade from '../components/Fade';
import Loader from './Loader';
// create a component
const Header = ({
  setCountry,
  countryCode,
  getLoader,
  fetchHeadlines,
  loading,
}) => {
  const [visible, setVisible] = useState(false);

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
            <Button
              css={(styles.font35, styles.white)}
              label={'Menu'}
              action={() => {
                setVisible(!visible);
              }}
            />
          </View>
        </View>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <Fade visible={visible} style={[styles.grayBackground, styles.flex1]}>
          <Menu
            setCountry={setCountry}
            countryCode={countryCode}
            fetchHeadlines={fetchHeadlines}
            getLoader={getLoader}
            setVisible={setVisible}
            visible={visible}
          />
        </Fade>
      )}
    </React.Fragment>
  );
};

Header.propTypes = {
  setCountry: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  getLoader: PropTypes.func.isRequired,
  fetchHeadlines: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

//make this component available to the app
export default Header;
