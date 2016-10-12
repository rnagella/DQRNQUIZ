// @flow
const React = require('React');
import {
  Component
} from 'react';
/* Components */
import {
  Text,
  View,
} from 'react-native';

import Router from '../navigation/AppRouter';

export default class AddScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Follow Scene',
      backgroundColor: '#5F9CC8',
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}} >
        <Text> This is Follow Scene! </Text>
        <Text onPress = {this._goToAbout}> Click here to Follow Beck Martin!</Text>
      </View>
    );
  }

  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about', {
      name: 'BeckMartin'
    }));
  }
}
