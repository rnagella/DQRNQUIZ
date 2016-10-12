const React = require('React');

// @flow
import {
  Component
} from 'react';
/* Components */
import {
  Text,
  View,
} from 'react-native';

export default class Screen1Screen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Screen1Screen',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Screen1Screen! </Text>
      </View>
    );
  }
}
