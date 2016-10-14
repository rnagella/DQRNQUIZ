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

import Router from '../navigation/AppRouter';
import Colors from '../constants/Colors';

export default class AddScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'Follow Scene',
      backgroundColor: Colors.navigationBarBackgroundColor,
      tintColor: Colors.navigationBarTintColor,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is Follow Scene! </Text>
        <Text onPress = {this._goToAbout}> Click here to Follow Beck Martin!</Text>
      </View>
    );
  }
  // Send data object to the About Scene
  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about', {
      name: 'Beck Martin',
      posts: 95,
      followers: 387,
      following: 407,
      location: 'Los Angeles, CA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }));
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:
    'center', flex: 1
  }
});
