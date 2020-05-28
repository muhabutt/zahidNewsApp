//import libraries
import React, { Component, useEffect, useState } from 'react'

import { View, Text, SafeAreaView, FlatList, Animated, TouchableOpacity } from 'react-native'

import styles from '../styles/mainCss'


import Article from '../components/Article'

import * as RNLocalize from 'react-native-localize'
import Constants from '../jsonFiles/Constants'
import Loader from '../components/Loader'
import Header from '../components/Header'
import { searchWords } from '../helpers/functions'

class Articles extends Component {
  _isMounted = false
  state = {
    news: [],
    countryCode: '',
    refresh: false,
    loading: true
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchHeadlines()
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  fetchHeadlines = (countryCode, category) => {
    let url = ''

    if (!countryCode) {
      RNLocalize.getLocales().map(item => {
        countryCode = item.countryCode
      })
    }
    if (!category) {
      category = ''
    }

    url = `${Constants.url}top-headlines?country=${countryCode}&category=${category}&apiKey=${Constants.apiKey}`

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        let arr = responseJson.articles.filter(article => !searchWords(article))
        return arr
      })
      .then(json => {
        if (this._isMounted) {
          this.setState({
            news: json,
            countryCode: countryCode,
            loading: false,
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  setCountry = countryCode => {
    this.setState({ countryCode })
  }

  getLoader = () => {
    if (this._isMounted) {
      this.setState({ loading: true })
    }
  }

  render() {
    const { news, countryCode, refresh, loading, opacity } = this.state
    return (
      <React.Fragment>
        <Header
          setCountry={this.setCountry}
          countryCode={countryCode}
          getLoader={this.getLoader}
          fetchHeadlines={this.fetchHeadlines}
        />

        {loading ? (
          <Loader />
        ) : (
            <React.Fragment>
              <Text style={[styles.article_title]}>{'Top headlines'}</Text>

              {news.length > 0 ? (
                <SafeAreaView style={[styles.flex1]}>
                  <FlatList
                    data={news}
                    renderItem={({ item }) => (
                      <Article
                        navigation={this.props.navigation}
                        article={item}
                      />
                    )}
                    keyExtractor={(item, index) => 'key' + index}
                    refreshing={refresh}
                    onRefresh={() => {
                      this.fetchHeadlines()
                      setTimeout(() => {
                        this.setState({ refresh: false })
                      }, 3000)
                    }}
                  />
                </SafeAreaView>
              ) : (
                  <View style={styles.article_box}>
                    <Text style={styles.article_title}>
                      {"Sorry we don't have any news for selected country"}
                    </Text>
                  </View>
                )}
            </React.Fragment>
          )}
      </React.Fragment>
    )
  }
}

//make this component available to the app
export default Articles