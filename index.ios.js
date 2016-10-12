// @flow
const AppRegistry = require('AppRegistry');
const React = require('React');

import {
  Component
} from 'react';
/* Components */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
/* Navigation */
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
/* Route */
import Router from 'AppRouter';
/* Icons */
import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

function getColor(isSelected) {
  return isSelected ? '#0084FF' : 'red';
}

class DQRNQUIZ extends Component {
  render() {
      return (
        <NavigationProvider router={Router}>
          <TabNavigation id = "tab-navigation"
            navigationUID = "tab-navigation"
            initialTab = "first">
              <TabNavigationItem id="first" selectedStyle={styles.selectedTab}
                renderIcon={(isSelected) => <Ionicons name="ios-boat-outline" size={28} color={getColor(isSelected)} /> }
              >
                <StackNavigation id="MenuScene" initialRoute={Router.getRoute('menu')}/>
              </TabNavigationItem>
              <TabNavigationItem id="second"
                renderIcon={(isSelected) => <Ionicons name="ios-list" size={28} color={getColor(isSelected)}/>}
                selectedStyle = {styles.selectedTab} >
                <StackNavigation id="ListScene" initialRoute = {Router.getRoute('list')}/>
              </TabNavigationItem>
              <TabNavigationItem
                id="third"
                selectedStyle={styles.selectedTab}
                renderIcon={(isSelected) => <Ionicons name="ios-add" size={28} color={getColor(isSelected)}/>} >
                  <StackNavigation id="AddScene" initialRoute={Router.getRoute('add')}/>
              </TabNavigationItem>
              <TabNavigationItem
                id="fourth"
                selectedStyle={styles.selectedTab}
                renderIcon={(isSelected) => <Ionicons name="ios-chatboxes-outline" size={28}
                color={getColor(isSelected)}/>} >
                <StackNavigation id = "Screen4Screen"
                  initialRoute = {Router.getRoute('screen4')}/>
              </TabNavigationItem>
              <TabNavigationItem
                id="fifth"
                renderIcon={(isSelected) => <Ionicons name="ios-person-outline" size={28} color={getColor(isSelected)} /> }
                selectedStyle={styles.selectedTab} >
                  <StackNavigation id = "Screen5Screen" initialRoute = {Router.getRoute('screen5')} />
              </TabNavigationItem>
          </TabNavigation>
        </NavigationProvider>
      );
  }
}

const styles = StyleSheet.create({
  selectedTab: {
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
    width: 50,
    borderColor: '#0084FF'
  },
});

AppRegistry.registerComponent('DQRNQUIZ', () => DQRNQUIZ);
