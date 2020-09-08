//import libraries
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getNews, setCountryCode, setLoading} from '../redux/Actions';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from '../styles/mainCss';
import Article from '../components/Article';
import Loader from '../components/Loader';
import Header from '../components/Header';

const Articles  = (props) => {

  const [refresh, setRefresh] = useState(false);
  const {navigation,news, loading, timeZone, countryCode, getNews, setLoading, setCountryCode, category} = props;

    useEffect(() => {
      getNews(countryCode,category);
    }, [])

    return (
      <React.Fragment>
        <Header
          setCountryCode={setCountryCode}
          countryCode={countryCode}
          setLoading={setLoading}
          getNews={getNews}
          loading={loading}
        />

        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Text style={[styles.article_title]}>{`${timeZone} top ${category} headlines`}</Text>

            {news.length > 0 ? (
              <SafeAreaView style={[styles.flex1]}>
                <FlatList
                  data={news}
                  renderItem={({item}) => (
                    <Article navigation={navigation} article={item} />
                  )}
                  keyExtractor={(item, index) => 'key' + index}
                  refreshing={refresh}
                  onRefresh={() => {
                    getNews(countryCode,category);
                    setRefresh(false)
                  }}
                />
              </SafeAreaView>
            ) : (
              <View style={styles.article_box}>
                <Text style={styles.article_title}>
                  {`Sorry we don't have any news for ${timeZone}`}
                </Text>
              </View>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
}


const mapStateToProps = state => {
  return {
    news: state.news.news,
    countryCode: state.news.countryCode,
    category: state.news.category,
    timeZone: state.news.timeZone,
    loading: state.news.loading
  }
}
const mapDispatchToProps = dispatch => ({
  getNews: (countryCode, category) => {
    dispatch(getNews(countryCode, category))
  },
  setLoading: (value) => {
    dispatch(setLoading(value))
  },
  setCountryCode: (value) => {
    dispatch(setCountryCode(value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
