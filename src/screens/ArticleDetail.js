//import liraries
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Linking,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../styles/mainCss';
import moment from 'moment';
import Constants from '../jsonFiles/Constants';
import {urlRegexTest} from '../helpers/functions';

// create a component
const ArticleDetail = ({route, navigation}) => {
  const {article} = route.params;
  const urlCheck = urlRegexTest(article.urlToImage);

  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView>
        <React.Fragment>
          {urlCheck === true &&
          article.urlToImage &&
          article.urlToImage !== null &&
          article.urlToImage !== '' ? (
            <FastImage
              source={{
                uri: article.urlToImage,
                priority: FastImage.priority.high,
              }}
              style={styles.article_detail_banner}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <Image
              source={Constants.images.logo}
              style={styles.article_default_banner}
              resizeMode="contain"
            />
          )}
        </React.Fragment>

        <Text style={styles.article_title}>
          {article.description
            ? unescape(article.description)
            : unescape(article.title)}
        </Text>

        <View style={styles.article_row}>
          <Text style={styles.article_label}>
            {article.author !== null
              ? 'Author: ' + article.author
              : 'Author: ' + 'Anonymous'}
          </Text>
          <Text style={styles.article_label}>
            {'Source: ' + article.source.name}
          </Text>
          <Text style={styles.article_label}>
            {'Published: ' +
              moment(article.publishedAt).format('DD-MM-YYYY, h:mm:ss a')}
          </Text>
          <Text
            style={[styles.article_label, styles.blue]}
            onPress={() => Linking.openURL(article.url)}>
            {'Website: ' + article.source.name}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

ArticleDetail.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

//make this component available to the app
export default ArticleDetail;
