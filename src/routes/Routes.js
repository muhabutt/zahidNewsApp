import * as React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import Articles from '../screens/Articles';

import ArticleDetail from '../screens/ArticleDetail';
import styles from '../styles/mainCss';
import BackButton from '../components/BackButton';

const Stack = createStackNavigator();

const Routes = navigation => {
  return (
    <View style={[styles.flex1, styles.appBackground]}>
      <Stack.Navigator
        initialRouteName="Articles"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#bab2b1',
          },
          headerLeft: () => <BackButton />,
        }}>
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      </Stack.Navigator>
    </View>
  );
};

Routes.proptypes = {
  navigation: PropTypes.object,
};
export default Routes;
