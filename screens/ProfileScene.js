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
import Colors from '../constants/Colors';

export default class ProfileScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile Scene',
      backgroundColor: Colors.navigationBarBackgroundColor,
      tintColor: Colors.navigationBarTintColor,
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>This is Profile Scene! </Text>
      </View>
    );
  }
}
