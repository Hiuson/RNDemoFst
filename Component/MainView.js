import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

//import Navigator from 'react-native-deprecated-custom-components';

//import HomeView from './HomeView';

var HomeView = require('./HomeView')
var OnDoorView = require('./OnDoorView')
var SellerView = require('./SellerView')
var MineView = require('./MineView')
var MoreView = require('./MoreView')

var homePageIcon = require('./image/icon_tabbar_homepage@2x.png')
var homePageSelectedIcon = require('./image/icon_tabbar_homepage_selected@2x.png')

const imageSource = {
  homePageIcon: require('./image/icon_tabbar_homepage@2x.png'),
  homePageSelectedIcon: homePageSelectedIcon = require('./image/icon_tabbar_homepage_selected@2x.png'),

  onDoorPageIcon: require('./image/icon_tabbar_onsite@2x.png'),
  onDoorPageSelectedIcon: require('./image/icon_tabbar_onsite_selected@2x.png'),

  sellerPageIcon: require('./image/icon_tabbar_merchant_normal@2x.png'),
  sellerPageSelectedIcon: require('./image/icon_tabbar_merchant_selected@2x.png'),

  minePageIcon: require('./image/icon_tabbar_mine@2x.png'),
  minePageSelectedIcon: require('./image/icon_tabbar_mine_selected@2x.png'),

  morePageIcon: require('./image/icon_tabbar_misc@2x.png'),
  morePageSelectedIcon: require('./image/icon_tabbar_misc_selected@2x.png'),
};

var MainView = React.createClass({

  getInitialState(){
    return{
      selectedTabItem:'home'
    }
  },

  render(){
    return(
      <TabBarIOS 
        barTintColor = '#f9f9f9'
        //translucent = {ture}
        tintColor = 'red'
      >
        <TabBarIOS.Item
          renderAsOriginal
          title = "首页"
          icon = {imageSource.homePageIcon}
          selectedIcon = {imageSource.homePageSelectedIcon}
          selected = {this.state.selectedTabItem == 'home'}//这句话有鬼
          onPress = {()=>{this.setState({selectedTabItem:'home'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: HomeView,
              title:'首页'
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          renderAsOriginal
          title="上门"
          icon = {imageSource.onDoorPageIcon}
          selectedIcon = {imageSource.onDoorPageSelectedIcon}
          selected = {this.state.selectedTabItem == 'ondoor'}
          onPress = {()=>{this.setState({selectedTabItem:'ondoor'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: OnDoorView,
              title:'上门'
            }}
          />
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
          renderAsOriginal
          title="商家"
          icon = {imageSource.sellerPageIcon}
          selectedIcon = {imageSource.sellerPageSelectedIcon}
          selected = {this.state.selectedTabItem == 'seller'}
          onPress = {()=>{this.setState({selectedTabItem:'seller'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: SellerView,
              title:'商家'
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          renderAsOriginal
          title="我的"
          icon = {imageSource.minePageIcon}
          selectedIcon = {imageSource.minePageSelectedIcon}
          selected = {this.state.selectedTabItem == 'mine'}
          onPress = {()=>{this.setState({selectedTabItem:'mine'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: MineView,
              title:'我的'
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          renderAsOriginal
          title="更多"
          icon = {imageSource.morePageIcon}
          selectedIcon = {imageSource.morePageSelectedIcon}
          selected = {this.state.selectedTabItem == 'more'}
          onPress = {()=>{this.setState({selectedTabItem:'more'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: MoreView,
              title:'更多'
            }}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
})

module.exports = MainView;

/*export default class MainView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedTabItem: 'home'}
  }

  render() {
    return(
      <TabBarIOS 
        barTintColor = '#f9f9f9'
        //translucent = {ture}
        tintColor = 'red'
      >
        <TabBarIOS.Item
          renderAsOriginal
          title = "首页"
          //icon = {{uri: '首页', scale: 2}}//改
          //selectedIcon = {{uri: '首页-选中', scale: 2}}
          selected = {this.state.selectedTabItem == 'home'}
          onPress = {()=>{this.setState({selectedTabItem:'home'});}}
        >
          <NavigatorIOS
            style = {{flex: 1}}
            initialRoute = {{
              component: HomeView,
              title:'首页'
            }}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}*/