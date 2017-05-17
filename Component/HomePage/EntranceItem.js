import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import screen from '../common/screen'

class EntranceItem extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={this.props.onPress}>
        <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
export default EntranceItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 4,
    height: 70,//screen.width / 5,
  },
  icon: {
    width: 40,
    height: 40,
    margin: 4,
  },
  title: {
    fontSize: 12,
  }
})