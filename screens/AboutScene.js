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
  ScrollView,
  ListView,
  Dimensions,
  Animated,
  Alert
} from 'react-native';

/* Icons */
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
// Images for the ListView and GridView
var data = [
  'https://images.alphacoders.com/511/511052.jpg',
  'https://stocklogos-pd.s3.amazonaws.com/styles/logo-medium-alt/happy_coder03.png?itok=6QM-ccu8',
  'https://googlecreativelab.github.io/coder/assets/images/coder_projects.jpg',
  'https://d13yacurqjgara.cloudfront.net/users/74133/screenshots/1888531/avatar-cool_1x.jpg',
  'https://pbs.twimg.com/profile_images/378800000426619448/ad669ea2b28bfbb7087958e0f398c97e_400x400.png',
  'https://res.cloudinary.com/hashnode/image/upload/v1452968258/uoutywnyr8bydb8ur5a6.png',
  'https://googlecreativelab.github.io/coder-projects/projects/music_boxes/assets/images/feature_full.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/42/84/b7/4284b7cb82d762194aa0681e55adad52.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/82/90/d9/8290d970865c5fe811430f806ba62c2d.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/ea/5f/82/ea5f82d43800f7a063e22fa819466d5f.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/c2/db/31/c2db3119f44823d4072e0bc04086f806.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/3e/84/5b/3e845b4ba7c9c3a14163ec0c334f77e9.jpg'
];

import ListScene from './ListSceneComponent';
// GridView implementation
class GridScene extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }
  render() {
    return (
      // Using ListView but manipulating to display as Grid with the help of Flexbox
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
              <Image style={styles.item} source={{uri: rowData}}></Image>
          )
        }}
      >
      </ListView>
    )
  };
}

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
    // State to maintain the user selected choice - list/gird.
    // Defaulted to grid
    this.state = {
      status: 'grid',
    }
  }
  // About Scene Navigation options - Left Button, Right Button,  and Title
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
          <TouchableOpacity style={{padding: 10}} onPress={() => {
            Alert.alert(
              'More',
              'This implementation is under construction. Stay tuned for more updates!'
            )
          }}
          ><Ionicons name="ios-more" color="#fff" size={30}/>
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
  // Green Button
  leftButton() {
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.button]}
        onPress={() => {
          Alert.alert(
            'Message',
            'This implementation is under construction. Stay tuned for more updates!'
          )
        }}
      >
        <Text>
          <Icon name="commenting-o" color="#fff" size={24}/>
        </Text>
      </TouchableHighlight>
    )
  }
  // Blue Button
  rightButton() {
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.userButton]}
        onPress={() => {
          Alert.alert(
            'Follow User',
            'This implementation is under construction. Stay tuned for more updates!'
          )
        }}
      >
        <Text>
          <Icon name="user-plus" color="#fff" size={24} />
        </Text>
      </TouchableHighlight>
    )
  }
  // Grid Button
  gridButton() {
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.userButton]} onPress = {() => {
        this.toggleStatus('grid');
      }}>
        <Text>
          <Entypo name="grid" color="#fff" size={24} />
        </Text>
      </TouchableHighlight>
    )
  }
  // List Button
  listButton() {
    console.log('list button');
    return (
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.userButton]} onPress = {() => {
        this.toggleStatus('list');
      }}>
        <Text>
          <Entypo name="list" color="#fff" size={24} />
        </Text>
      </TouchableHighlight>
    )
  }
  // Update the state to the user selection - list/grid
  toggleStatus(value) {
    this.setState({
      status: value
    });
  }

  // View to display fixed content of ScrollView - Stats, Icons, Location, Desc ...
  _renderScrollViewFixedContent() {
      return (
          <View style={{backgroundColor: 'transparent'}}>
            {/* Stats */}
            <View style = {styles.stats} >
              <View style = {{alignItems: 'center'}} >
                <Text style = {{fontSize: 18, fontWeight: '500', color: Colors.midGrey}}>{this.props.posts}</Text>
                <Text style = {{fontSize: 12}} > POSTS </Text>
              </View>
              <View style = {{alignItems: 'center'}} >
                <Text style={{fontSize: 18, fontWeight: '500', color: Colors.midGrey}}>{this.props.followers}</Text>
                <Text style={{fontSize: 12}}> FOLLOWERS </Text>
              </View>
              <View style={{alignItems: 'center'}} >
                <Text style = {{fontSize: 18, fontWeight: '500', color: Colors.midGrey }} >{this.props.following}</Text>
                <Text style = {{fontSize: 12}} > FOLLOWING </Text>
              </View>
            </View>
            {/* Icons */}
            <View style={{height: 100, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
              {this.leftButton()}
              <Icon name="user" size={102} color={Colors.midGrey}/>
              {this.rightButton()}
            </View>
            {/* Profile Name and Location */}
            <View style = {{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 28}} >
              <Text style={{fontSize: 18, fontWeight: '400'}}>{this.props.name}</Text>
              <Text style={{padding: 10}}> | </Text>
              <Text style={{color: Colors.navigationBarBackgroundColor, fontSize: 18}}> <Entypo name="location-pin" size={18}/>{this.props.location}</Text>
            </View>
            {/* Description */}
            <Text style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, textAlign: 'justify', fontSize: 16, height: 88}}>{this.props.description}</Text>
          </View>
      );
    }

  // View to display Scroll content based on User selection. ListView/GridView
  // Defaulted to GridView
  _renderScrollViewScrollContent() {
    return (
      // Note: marginTop is set to 280px to make the possibility of Scroll the
      // list/grid view on top of the fixed content view of ScrollView. Come visit again
      <View style={{marginTop: 280}} >
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: Colors.veryLightGrey}}>
          {this.gridButton()}
          {this.listButton()}
        </View>
        {/* Show data - list/grid based on user selection.
          * The DOM will be replaced with the user selected view(list/grid).
         */}
        {this.state.status === 'list' ? <ListScene/>: <GridScene/>}
      </View>
    );
  }
  render() {
    var _scrollView: ScrollView;
    return (
        <View style={{flex: 1}}>
          <ScrollView
            // Note: With the help of stickyHeaderIndices make the Grid/List selection-view
            // sticky when user scroll of the ScrollView
            // But this causing the List/grid data not to scroll due to the design
            // style of current implementation. Come visit again
            // stickyHeaderIndices={[0]}
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={500}
            alwaysBounceVertical={true}
            bounce={false}
            style={{flex: 1}}
          >
          {/* Render Grid/List view along with selectors */}
          {this._renderScrollViewScrollContent()}
          <Animated.View style={styles.header}>
          {/* Render Fixed view of ScrollView - Stats, User Profile data */}
            {this._renderScrollViewFixedContent()}
          </Animated.View>
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  stats: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F1F1F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
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
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: '#CCC',
    margin: 1,
    width: (Dimensions.get('window').width/3)-3,
    height: (Dimensions.get('window').width/3)-3
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
});
