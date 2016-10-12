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

export default class ListScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'List Scene',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>This is List Scene! </Text>
      </View>
    );
  }
}
