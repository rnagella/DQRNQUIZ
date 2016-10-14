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

import ListSceneComponent from './ListSceneComponent';

export default class ListScene extends React.Component {
  static route = {
    navigationBar: {
      title: 'List Scene',
      backgroundColor: Colors.navigationBarBackgroundColor,
      tintColor: Colors.navigationBarTintColor,
    }
  }

  render() {
    return (
      <ListSceneComponent/>
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
