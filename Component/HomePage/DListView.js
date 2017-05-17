import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

import screen from '../common/screen'
import DListViewCell from './DListViewCell'

const sourceURL = 'https://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind'
const count = 10

class DListView extends Component {

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      name: 'DListView',
      itemSources: ds.cloneWithRows([]),
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
      console.log('DListView json:');
      console.log(json);
      this.setState({
        itemSources:this.state.itemSources.cloneWithRows(json.data)
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return(
      <View>
        <ListView
        {...this.props}
          enableEmptySections
          dataSource={this.state.itemSources}
          renderRow={(rowData) => 
            <DListViewCell 
              info={rowData}
              onPress={() => {
                /*TODO*/
              }}
            />
          }
        />
      </View>
    )
  }
}
module.exports = DListView;