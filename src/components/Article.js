//import liraries
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import moment from 'moment';
import styles from '../styles/mainCss';
import Button from './Button';
import FastImage from 'react-native-fast-image';
import {urlRegexTest} from '../helpers/functions';
import Constants from '../jsonFiles/Constants';

// create a component
const Article = ({article, navigation}) => {
  const goToDetail = () => {
    navigation.navigate('ArticleDetail', {
      article: article,
    });
  };

  const getImage = imageUrl => {
    const testUrl = urlRegexTest(imageUrl);

    if (testUrl === true && imageUrl !== null && imageUrl !== '') {
      return (
        <FastImage
          source={{
            uri: imageUrl,
            priority: FastImage.priority.high,
          }}
          style={[styles.article_banner, styles.col1]}
        />
      );
    } else {
      return (
        <Image
          source={Constants.images.logo}
          style={[styles.logo, styles.defaultLogo]}
          resizeMode="contain"
        />
      );
    }
  };

  return (
    <View style={styles.article_container}>
      <View style={[styles.article_row]}>
        {getImage(article.urlToImage)}

        <View style={styles.col4}>
          {article.title ? (
            <Text style={styles.article_title}>{article.title + '.'}</Text>
          ) : (
            <React.Fragment />
          )}
          <View style={[styles.article_row]}>
            <Text style={styles.article_span}>
              {'Date: ' +
                moment(article.publishedAt).format('DD/MM//YYYY, h:mm:ss a')}
            </Text>
            <View style={styles.floatRight}>
              <Button label="Read more!" action={goToDetail} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  navigation: PropTypes.object,
};

//make this component available to the app
export default Article;
