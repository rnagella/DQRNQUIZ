// @flow
const React = require('React');
const StyleSheet = require('StyleSheet');

import {
  Component
} from 'react';
/* Components */
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

/* Icons */
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export default class AboutScene extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.name === 'undefined') {
          return '';
        }

        return params.name ? `${params.name}` : ``;
      },
      backgroundColor: Colors.navigationBarBackgroundColor,
      tintColor: Colors.navigationBarTintColor,
      renderRight() {
        return (
          <TouchableOpacity style={{padding: 10}}><Ionicons name="ios-more" color="#fff" size={30}/>
          </TouchableOpacity>
        )
      }
    }
  }

  componentDidMount() {
    // In case we want to update the data once we fetch from server
    setTimeout(() => {
      this.props.navigator.updateCurrentRouteParams({
        name: this.props.route.params.name,
        posts: this.props.route.params.posts,
        followers: this.props.route.params.followers,
        following: this.props.route.params.following,
        location: this.props.route.params.location,
        description: this.props.route.params.description
      });
    }, 1000);
  }

  leftButton() {
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.button]} onPress ={() => {}}>
        <Text>
          <Icon name="commenting-o" color="#fff" size={24}/>
        </Text>
      </TouchableHighlight>
    )
  }

  rightButton() {
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.userButton]} onPress = {() => {}}>
        <Text>
          <Icon name="user-plus" color="#fff" size={24} />
        </Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style = {styles.stats} >
          <View style = {{alignItems: 'center'}} >
            <Text style = {{fontSize: 18, fontWeight: '400'}}>{this.props.posts}</Text>
            <Text style = {{fontSize: 8}} > POSTS </Text>
          </View>
          <View style = {{alignItems: 'center'}} >
            <Text style={{fontSize: 18, fontWeight: '400'}}>{this.props.followers}</Text>
            <Text style={{fontSize: 8}}> FOLLOWERS </Text>
          </View>
          <View style={{alignItems: 'center'}} >
            <Text style = {{fontSize: 18, fontWeight: '400' }} >{this.props.following}</Text>
            <Text style = {{fontSize: 8}} > FOLLOWING </Text>
          </View>
        </View>
        <View style={{height: 100, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
          {this.leftButton()}
          {/* <Image source={require('../the-circle.png')} style={{width: 88,height: 88}}/> */}
          <Icon name="user" size={102} color={Colors.midGrey}/>
          {this.rightButton()}
        </View>
        <View style = {{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
        <Text style={{fontSize: 18, fontWeight: '400'}}>{this.props.name}</Text>
        <Text style={{padding: 10}}> | </Text>
        <Text style={{color: '#5F9CC8', fontSize: 18}}> <Entypo name="location-pin" size={18}/>{this.props.location}</Text>
        </View>
        <Text style={{padding: 20, textAlign: 'justify'}}>{this.props.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stats: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F1F1F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 0,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#407643'
  },
  userButton: {
    borderWidth: 0,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.navigationBarBackgroundColor
  },
});
