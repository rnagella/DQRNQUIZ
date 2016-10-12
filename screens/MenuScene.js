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

export default class MenuScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Menu Scene',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>This is Menu Scene!</Text>
      </View>
    );
  }
}
