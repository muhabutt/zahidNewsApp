//import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Picker } from '@react-native-community/picker'
import styles from '../styles/mainCss'
import Countries from '../jsonFiles/Countries'

// create a component
const DropDown = ({ setCountry, countryCode, fetchHeadlines, getLoader }) => {
  return (
    <View style={styles.dropDownContainer}>
      <Picker
        selectedValue={countryCode}
        onValueChange={(itemValue, itemIndex) => {
          if (getLoader) getLoader()
          setCountry(itemValue)
          fetchHeadlines(itemValue)
        }}>
        {Countries.countriesList.map((item, index) => {
          return (
            <Picker.Item
              key={index}
              label={item.name}
              value={item.code.toLowerCase()}
            />
          )
        })}
      </Picker>
    </View>
  )
}

DropDown.propTypes = {
  setCountry: PropTypes.func,
  country: PropTypes.string,
  fetchHeadlines: PropTypes.func,
}
//make this component available to the app
export default DropDown
