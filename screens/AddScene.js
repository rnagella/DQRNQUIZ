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
      name: 'Beck Martin',
      posts: 95,
      followers: 387,
      following: 407,
      location: 'Los Angeles, CA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }));
  }
}
