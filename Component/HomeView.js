import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


import ImageScrollView from './HomePage/ImageScrollView'
import SpacingView from './common/SpacingView'
import EntranceView from './HomePage/EntranceView'
import RecommendView from './HomePage/RecommendView'
import DListView from './HomePage/DListView'
import screen from './common/screen'
//import FocusImage from './HomePage/FocusImage'

var title = 'title';

var HomeView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <DListView 
          renderHeader={() => this.renderHeader()}
        />
      </View>
    );
  },

  renderHeader() {
    return (
      <View>
        <ImageScrollView style={styles.ImageScrollView}/>

        <SpacingView />

        <EntranceView />

        <SpacingView />

        <RecommendView />
        
        <SpacingView />
        
      </View>
    );
  },

})
module.exports = HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    //justifyContent: 'center',
    //top:64,
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ImageScrollView:{
    //flex:1,
    //top:64,
    height:100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  listViewTitle: {
    height: 35,
    justifyContent: 'center',
    borderWidth: screen.onePixel,
    borderColor: '#e0e0e0',
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
});