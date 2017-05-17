import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import screen from '../common/screen'

class RecommendItem extends Component {
  render() {
    let info = this.props.info

    let title = info.maintitle
    let content = info.deputytitle
    let imageUrl = info.imageurl
    //console.log(imageUrl)

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.content}>
            {content}
          </Text>
        </View>
        <Image style={styles.icon} source={{ uri: imageUrl}} />
      </TouchableOpacity>
    )
  }
}
export default RecommendItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - screen.onePixel,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: screen.onePixel,
        borderRightWidth: screen.onePixel,
        borderColor: '#e0e0e0'
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    content: {
        fontSize: 14,
        color: '#222222',
    },
});