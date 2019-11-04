import React from 'react';
import { createStackNavigator,HeaderBackButton } from 'react-navigation-stack';
import { Image,View,StyleSheet,Text } from 'react-native'
import Main from './Main';
import Detail from './Detail'

const MainStack = createStackNavigator({
  Main: { 
    screen: Main,
    navigationOptions:  {
      headerTitle: "GitBets",
    },
  },
  Detail:{
    screen: Detail,
    navigationOptions : ({navigation}) => ({
      headerLeft: <HeaderBackButton onPress={()=>navigation.goBack()} />,
      headerTitle: 
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.img} source={require('../../../src/img/premier-league.png')} />
          <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>English Premier League</Text>
        </View>,
      headerTitleStyle:{
        fontSize: 15
      }
    })
  }
}, {
  defaultNavigationOptions : ({navigation}) => ({
    headerStyle:{
      // backgroundColor: '#f9f0ff',
      backgroundColor: 'white',
      margin: 20,
      marginBottom: 0,
      borderBottomWidth: null,
    },
    headerLeft: 
      <View>
        <Image style={styles.img} source={require('../../../src/img/drawer.png')} />
      </View>,
    headerRight: 
    <View>
      <Image style={styles.img} source={require('../../../src/img/bell.png')} />
    </View>,
    headerTitleStyle: { 
      color : '#120338',
      fontWeight: 'bold',
      fontSize: 25,
    },
  }) 
})
export default MainStack;

const styles= StyleSheet.create({
  img:{
    resizeMode: 'contain',
    width: 30,
    height: 30,
  }
})
