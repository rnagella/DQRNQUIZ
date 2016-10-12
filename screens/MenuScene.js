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
      backgroundColor: '#5F9CC8',
      tintColor: '#fff',
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
