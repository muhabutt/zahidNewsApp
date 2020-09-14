//import libraries
import React, {useState, memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/mainCss';
import Menu from '../components/Menu';
import Constants from '../jsonFiles/Constants';
import Fade from '../components/Fade';
import {connect} from 'react-redux';
import {getNews} from '../redux/Actions';
// create a component
const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const {countryCode, getNews, category} = props;
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
      <Fade visible={visible} style={[styles.grayBackground, styles.flex1]}>
        <Menu
          countryCode={countryCode}
          getNews={getNews}
          setVisible={setVisible}
          category={category}
        />
      </Fade>
    </React.Fragment>
  );
};

Header.propTypes = {
  countryCode: PropTypes.string,
  getNews: PropTypes.func.isRequired,
  category: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  getNews: (countryCode, category) => {
    dispatch(getNews(countryCode, category));
  },
});

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    countryCode: state.news.countryCode,
    timeZone: state.news.timeZone,
    category: state.news.category,
  };
};
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.countryCode === nextProps.countryCode &&
    prevProps.category === nextProps.category
  );
};
const header = memo(Header, areEqual);

export default connect(mapStateToProps, mapDispatchToProps)(header);
