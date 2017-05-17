import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper'

import screen from '../common/screen'

let sourceURL = 'https://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550';

class ImageScrollView extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: 'imageScrollView',
      imageSource: [],
    }
  }

  fetchData() {
    fetch(sourceURL)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((json) => {
      let jsonImages = [];
      for(i = 0; i < json.data.length; i++) {
        let url = json.data[i].img;
        jsonImages.push(url);
      }
      this.setState({imageSource:jsonImages});
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render(){
    let {imageSource}=this.state
    let itemsArray = imageSource.map(
      (imageSource, i) => {
        //console.log('!!!'+imageSource);
        return (
          <Image source = {{uri:imageSource}} 
                 style = {styles.icon}
                 key={i} />
        );
      }
    )

    return(
      <View style={styles.container}>
        {/*<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={()=>this._onScroll()}
          //automaticallyAdjustContentInsets={true}
          directionalLockEnabled={true}
        >
          <View style={styles.menuContainer}>
            {itemsArray}
          </View>
        </ScrollView>*/}
        <Swiper style={styles.wrapper} autoplay={true}>
          {itemsArray}
        </Swiper>
      </View>
    );
  }

  _onScroll(){
        //this._contentOffsetX = this._scrollView.contentOffset.x;
        //this._index = Math.round(this._contentOffsetX / screen.width);
    }
}
module.exports = ImageScrollView;

const styles = StyleSheet.create({
    container: {
        //top:-200,
        height:100,
        //flex:1,
        backgroundColor: 'white',
    },
    contentContainer: {
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screen.width,
    },
    pageControl: {
        margin: 10,
    },
    wrapper: {
      //height:300
    },
    icon: {
      //flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      width: screen.width,
      height: 100
    },

});