//import libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from '../styles/mainCss';
import SubCategories from '../jsonFiles/SubCategories';
import DropDown from '../components/DropDown';
import {connect} from 'react-redux';
import {getNews} from '../redux/Actions';

// create a component
const Menu = (props) => {
  const {countryCode, getNews, toggleBox, category, news} = props;

  const getCategories = () => {
    let cat = SubCategories.categories;
    return cat.map((item, key) => (
      <TouchableOpacity
        key={key}
        onPress={() => {
          toggleBox();
          getNews(countryCode, item.name);
        }}>
        <Text
          style={[
            styles.article_anchor,
            category === item.name ? styles.blue : styles.white,
          ]}>
          {item.name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <React.Fragment>
      <DropDown toggleBox={toggleBox} />
      {news.length > 0 ? (
        <SafeAreaView style={[styles.flex1, styles.pl15, styles.pr15]}>
          <ScrollView>{getCategories()}</ScrollView>
        </SafeAreaView>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
};

Menu.propTypes = {
  toggleBox: PropTypes.func.isRequired,
  countryCode: PropTypes.string,
  getNews: PropTypes.func,
  category: PropTypes.string,
  news: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    countryCode: state.news.countryCode,
    category: state.news.category,
    news: state.news.news,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getNews: (countryCode, category) => {
    dispatch(getNews(countryCode, category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
