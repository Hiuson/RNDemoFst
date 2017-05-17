import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

import screen from '../common/screen'

class DListViewCell extends Component {

  render() {
    let { info } = this.props
    let imageUrl = info.imgurl
    let title = info.mname
    let content = info.title
    let price = info.price + '元'
    
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress}
      >
        <Image source={{uri: imageUrl}} style={styles.icon} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default DListViewCell;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: screen.onePixel,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  content: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
  price: {
    fontSize: 10,
    color: 'green',
  }
});