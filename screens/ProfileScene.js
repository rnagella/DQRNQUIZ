// @flow
const React = require('React');
import {
  Component
} from 'react';
/* Components */
import {
  Text,
  View,
  StyleSheet
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
      <View style={styles.container}>
        <Text>This is Profile Scene! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  }
});
