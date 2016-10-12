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

export default class Screen4Screen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Screen4Screen',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Screen4Screen! </Text>
      </View>
    );
  }
}
