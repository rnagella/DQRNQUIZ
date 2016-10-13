// @flow
const AppRegistry = require('AppRegistry');
const React = require('React');

import {
  Component
} from 'react';
/* Components */
import {
  StyleSheet,
  View,
} from 'react-native';
/* Navigation */
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
/* Route */
import Router from 'AppRouter';
/* Icons */
import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigatorScene from './screens/NavigatorScene';

function getColor(isSelected) {
  return isSelected ? '#0084FF' : '#000';
}

class DQRNQUIZ extends Component {
  render() {
      return (
        <View style={{flex: 1}}>
          <NavigatorScene>
          </NavigatorScene>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  selectedTab: {
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#55AADA'
  },
});

AppRegistry.registerComponent('DQRNQUIZ', () => DQRNQUIZ);
