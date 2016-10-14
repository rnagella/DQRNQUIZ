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

// GridView implementation
export default class GridScene extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#CCC',
    margin: 1,
    width: (Dimensions.get('window').width/3)-3,
    height: (Dimensions.get('window').width/3)-3
  },
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
