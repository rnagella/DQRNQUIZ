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

export default class ChatScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Chat Scene',
      backgroundColor: '#5F9CC8',
      tintColor: '#fff',
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
