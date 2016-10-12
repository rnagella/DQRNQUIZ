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

export default class Screen3Screen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Screen3Screen',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}} >
        <Text> Screen3Screen! </Text>
        <Text onPress = {this._goToAbout}>Push about route </Text>
      </View>
    );
  }

  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about', {
      name: 'BeckMartin'
    }));
  }
}
