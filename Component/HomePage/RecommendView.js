import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

import RecommendItem from './RecommendItem'
import screen from '../common/screen'

const url = 'https://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';

//const url = 'https://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550';

class RecommendView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recommendSources:[],
    }
  }

  fetchData() {
    fetch(url, {
      'method': 'GET',
      'headers': {
        'Accept': 'text/plain',                                     
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Recomend json :');
        console.log(json);
        //console.log('recommend' + JSON.stringify(json));
        this.setState({ recommendSources: json.data });
      })
      .catch((error) => {
        console.log('recomend view network error:');
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {

    let {recommendSources}=this.state
    let items = recommendSources.map(
      (recommendSource, i) => (
        <RecommendItem 
          key={i}
          info={recommendSources[i]}
          onPress={() => {
            //onPress
          }} />
      )
    )

    return (
      <View style={styles.container}>
        {items}
      </View>
    )
  }
}
module.exports = RecommendView;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: '#e0e0e0',
    },
});