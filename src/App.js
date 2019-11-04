import React from 'react';
import DashboardTabNav from '../src/pages/dashboard/index';
import Main from './pages/main/Main'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Dashboard: { 
    screen: DashboardTabNav,
    navigationOptions: {
      header: null
    }
  },
  
}, {
  initialRouteName: 'Dashboard',
  defaultNavigationOptions : ({navigation}) => ({
    headerStyle:{
      backgroundColor: '#f9f0ff',
    },
    headerTitleStyle: { 
      color : 'white',
      fontSize: 25,
    },
  }) 
})

export default createAppContainer(MainNavigator)
