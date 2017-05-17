import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

import EntranceItem from './EntranceItem'
import screen from '../common/screen'

const entranceSource = {
  
  iconSouce:[
    {title: '美食', imageUri: require('../image/icon_homepage_entertainmentCategory.png')},
    {title: '足迹', imageUri: require('../image/icon_homepage_foottreatCategory.png')},
    {title: '酒店', imageUri: require('../image/icon_homepage_hotelCategory.png')},
    {title: 'KTV', imageUri: require('../image/icon_homepage_KTVCategory.png')},
    {title: '捐赠', imageUri: require('../image/icon_homepage_lifeServiceCategory.png')},
    {title: '电影', imageUri: require('../image/icon_homepage_movieCategory.png')},
    {title: '购物', imageUri: require('../image/icon_homepage_shoppingCategory.png')},
    //{title: '吃饭', imageUri: require('../image/icon_homepage_dinnerCategory.png')},
  ]
}

class EntranceView extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let menuItems = entranceSource.iconSouce.map(
      (source, i) => (
        <EntranceItem 
          key={i}
          title={source.title}
          icon={source.imageUri}
          onPress={() => {
            //onPress
          }} />
      )
    )

    return (
      <View style={styles.itemsView} >
        {menuItems}
      </View>
    )
  }
}
export default EntranceView;

const styles = StyleSheet.create({
  itemsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screen.width,
    backgroundColor: 'white',
  },
});