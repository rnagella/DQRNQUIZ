// @flow
// const AppRegistry = require('AppRegistry');
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
  StatusBar
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

// Highlight tab based on the user selection
function getColor(isSelected) {
  return isSelected ? '#0084FF' : '#000';
}

export default class NavigatorScene extends Component {
  render() {
      return (
          <NavigationProvider router={Router}>
            <TabNavigation id = "tab-navigation"
              navigationUID = "tab-navigation"
              // Set initial Tab to Add/Follow scene
              initialTab = "add">
              {/* Menu Tab */}
                <TabNavigationItem id="menu" selectedStyle={styles.selectedTab}
                  renderIcon={(isSelected) => <Ionicons name="ios-boat-outline" size={34} color={getColor(isSelected)} /> }
                >
                  <StackNavigation id="MenuScene" initialRoute={Router.getRoute('menu')}/>
                </TabNavigationItem>
                {/* List Tab */}
                <TabNavigationItem id="list"
                  renderIcon={(isSelected) => <Ionicons name="ios-list" size={34} color={getColor(isSelected)}/>}
                  selectedStyle = {styles.selectedTab} >
                  <StackNavigation id="ListScene" initialRoute = {Router.getRoute('list')}/>
                </TabNavigationItem>
                {/* Add / Follow Tab */}
                <TabNavigationItem
                  id="add"
                  selectedStyle={styles.selectedTab}
                  renderIcon={(isSelected) => <Ionicons name="ios-add" size={34} color={getColor(isSelected)}/>} >
                    <StackNavigation id="AddScene" initialRoute={Router.getRoute('add')}/>
                </TabNavigationItem>
                {/* Chat Tab */}
                <TabNavigationItem
                  id="chat"
                  selectedStyle={styles.selectedTab}
                  renderIcon={(isSelected) => <Ionicons name="ios-chatboxes-outline" size={34}
                  color={getColor(isSelected)}/>} >
                  <StackNavigation id = "ChatScene"
                    initialRoute = {Router.getRoute('chat')}/>
                </TabNavigationItem>
                {/* Profile Tab */}
                <TabNavigationItem
                  id="profile"
                  renderIcon={(isSelected) => <Ionicons name="ios-person-outline" size={34} color={getColor(isSelected)} /> }
                  selectedStyle={styles.selectedTab} >
                    <StackNavigation id = "ProfileScene" initialRoute = {Router.getRoute('profile')} />
                </TabNavigationItem>
            </TabNavigation>
          </NavigationProvider>
      );
  }
}

const styles = StyleSheet.create({
  selectedTab: {
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#55AADA'
  },
});
