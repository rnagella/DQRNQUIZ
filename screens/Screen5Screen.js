// @flow
import React, {
  Component
} from 'react';
/* Components */
import {
  Text,
  View,
} from 'react-native';

export default class Screen5Screen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Screen5Screen',
    }
  }

  render() {
    return ( 
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Screen5Screen! </Text> 
      </View>
    );
  }
}
