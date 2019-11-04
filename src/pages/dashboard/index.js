import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainStack from '../main/index';
import { Image,StyleSheet } from 'react-native'

const DashboardTabNav = createBottomTabNavigator({
  One: { 
    screen: MainStack,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor }) => (
       <Image style={{ tintColor: focused ? '#623cea' : null, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../../src/img/world.png')} />
      )}
  },
  Two: { 
    screen: MainStack,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor }) => (
       <Image style={{ tintColor: focused ? '#623cea' : null, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../../src/img/play.png')} />
      )}
  },
  Three: { 
    screen: MainStack,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor }) => (
      <Image style={{ tintColor: focused ? '#623cea' : null, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../../src/img/award.png')} />
    )}
  },
  Four: { 
    screen: MainStack,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor }) => (
      <Image style={{ tintColor: focused ? '#623cea' : null, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../../src/img/layout.png')} />
    )}
  },
  Five: { 
    screen: MainStack,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor }) => (
      <Image style={{ tintColor: focused ? '#623cea' : null, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../../src/img/man.png')} />
    )}
  },
},{
  tabBarOptions: { 
    showLabel: false,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
})


export default DashboardTabNav;
