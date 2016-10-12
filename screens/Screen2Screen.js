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

export default class Screen2Screen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Screen2Screen',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Screen2Screen! </Text>
      </View>
    );
  }
}
