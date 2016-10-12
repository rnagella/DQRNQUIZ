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

export default class ChatScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Chat Scene',
      backgroundColor: Colors.navigationBarBackgroundColor,
      tintColor: Colors.navigationBarTintColor,
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>This is Chat Scene! </Text>
      </View>
    );
  }
}
