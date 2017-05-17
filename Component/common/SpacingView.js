import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SpacingView extends Component {
  render() {
    return (
      <View style={style.container}>
      </View>
    )
  }
}
export default SpacingView;

const style = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#f3f3f3',
  },
});