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
  Animated
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

// ListView implementation
class ListScene extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  // Creat some dummy context for the ListView image description
  loremIpsum() {
  	var loremIpsumWordBank = new Array("lorem","ipsum","dolor","sit","amet,","consectetur","adipisicing","elit,","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua.","enim","ad","minim","veniam,","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat.","duis","aute","irure","dolor","in","reprehenderit","in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur.","excepteur","sint","occaecat","cupidatat","non","proident,","sunt","in","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum.","sed","ut","perspiciatis,","unde","omnis","iste","natus","error","sit","voluptatem","accusantium","doloremque","laudantium,","totam","rem","aperiam","eaque","ipsa,","quae","ab","illo","inventore","veritatis","et","quasi","architecto","beatae","vitae","dicta","sunt,","explicabo.","nemo","enim","ipsam","voluptatem,","quia","voluptas","sit,","aspernatur","aut","odit","aut","fugit,","sed","quia","consequuntur","magni","dolores","eos,","qui","ratione","voluptatem","sequi","nesciunt,","neque","porro","quisquam","est,","qui","dolorem","ipsum,","quia","dolor","sit,","amet,","consectetur,","adipisci","velit,","sed","quia","non","numquam","eius","modi","tempora","incidunt,","ut","labore","et","dolore","magnam","aliquam","quaerat","voluptatem.","ut","enim","ad","minima","veniam,","quis","nostrum","exercitationem","ullam","corporis","suscipit","laboriosam,","nisi","ut","aliquid","ex","ea","commodi","consequatur?","quis","autem","vel","eum","iure","reprehenderit,","qui","in","ea","voluptate","velit","esse,","quam","nihil","molestiae","consequatur,","vel","illum,","qui","dolorem","eum","fugiat,","quo","voluptas","nulla","pariatur?","at","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus,","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti,","quos","dolores","et","quas","molestias","excepturi","sint,","obcaecati","cupiditate","non","provident,","similique","sunt","in","culpa,","qui","officia","deserunt","mollitia","animi,","id","est","laborum","et","dolorum","fuga.","harum","quidem","rerum","facilis","est","et","expedita","distinctio.","Nam","libero","tempore,","cum","soluta","nobis","est","eligendi","optio,","cumque","nihil","impedit,","quo","minus","id,","quod","maxime","placeat,","facere","possimus,","omnis","voluptas","assumenda","est,","omnis","dolor","repellendus.","temporibus","autem","quibusdam","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet,","ut","et","voluptates","repudiandae","sint","molestiae","non","recusandae.","itaque","earum","rerum","hic","tenetur","a","sapiente","delectus,","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat");
  	var minWordCount = 15;
  	var maxWordCount = 30;

  	var randy = Math.floor(Math.random()*(maxWordCount - minWordCount)) + minWordCount;
  	var ret = "";
  	for(i = 0; i < randy; i++) {
  		var newTxt = loremIpsumWordBank[Math.floor(Math.random() * (loremIpsumWordBank.length - 1))];
  		if (ret.substring(ret.length-1,ret.length) == "." || ret.substring(ret.length-1,ret.length) == "?") {
  			newTxt = newTxt.substring(0,1).toUpperCase() + newTxt.substring(1, newTxt.length);
  		}
  		ret += " " + newTxt;
  	}
  	return ret;
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
              <View style={{flex: 1, flexDirection: 'row', }}>
                <Image style={{flex: 0.4}} source={{uri: rowData}}></Image>
                <Text style={{textAlign: 'justify', flex: 0.6, padding: 20}}>{this.loremIpsum()}</Text>
              </View>
          );
        }}
        renderSeparator={(sectionID: number, rowID: number, adjacentRowHighlighted: bool)=>{
          return (
            <View
              key={`${sectionID}-${rowID}`}
              style={{
                height: 1,
                backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
              }}
            />
          );
        }}
      >
      </ListView>
    )
  };
}
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
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          console.log('rowData' + rowData);
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
    this.state = {
      status: 'grid',
    }
  }
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

  listButton() {
    console.log('list button');
    return (
      <View>
      <TouchableHighlight underlayColor = {Colors.grey} style = {[styles.userButton]} onPress = {() => {
        console.log('clicked list button');
        this.toggleStatus('list');
      }}>
        <Text>
          <Entypo name="list" color="#fff" size={24} />
        </Text>
      </TouchableHighlight>
      </View>
    )
  }

  toggleStatus(value) {
    this.setState({
      status: value
    });
    console.log('toggle button handler' + this.state.status);
  }

  _renderScrollViewFixedContent() {
      return (
          <View style={{backgroundColor: 'transparent'}}>
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
            <View style={{height: 100, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row'}}>
              {this.leftButton()}
              <Icon name="user" size={102} color={Colors.midGrey}/>
              {this.rightButton()}
            </View>
            <View style = {{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 28}} >
              <Text style={{fontSize: 18, fontWeight: '400'}}>{this.props.name}</Text>
              <Text style={{padding: 10}}> | </Text>
              <Text style={{color: Colors.navigationBarBackgroundColor, fontSize: 18}}> <Entypo name="location-pin" size={18}/>{this.props.location}</Text>
            </View>
            <Text style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, textAlign: 'justify', fontSize: 16, height: 88}}>{this.props.description}</Text>
          </View>
      );
    }

  _renderScrollViewScrollContent() {
    return (
      <View style={{marginTop: 280}} >
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: Colors.veryLightGrey}}>
          {this.gridButton()}
          {this.listButton()}
        </View>
        {this.state.status === 'list' ? <ListScene/>: <GridScene/>}
      </View>
    );
  }
  render() {
    var _scrollView: ScrollView;
    return (
        <View style={{flex: 1}}>
          <ScrollView
            // stickyHeaderIndices={[0]}
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={500}
            alwaysBounceVertical={true}
            bounce={false}
            style={{flex: 1}}
          >
          {this._renderScrollViewScrollContent()}
          <Animated.View style={styles.header}>
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
