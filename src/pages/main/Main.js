import React from 'react'
import { Text,View,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import { Card } from '../../components'
import Games from './Games'
import LiveMatches from './LiveMatches'
import Matches from './Matches'

export default function Main({ navigation }){
 return(
  <View style={styles.container}>
   <Card />
   <View style={styles.main}>
     <View>
      <Text style={styles.title}>Games</Text>
      <Games />
     </View>
     <View>
      <Text style={styles.title} >Live Matches</Text>
      <LiveMatches navigation={navigation} />
      {/* <Circular /> */}
     </View>
     <View>
      <Text style={styles.title}>Matches</Text>
        <ScrollView style={{ height: '33%', marginBottom: '30%', marginTop: 20 }}>
          <Matches time="1:00" team={["Arsenal","Chealsea"]} icon={[require('../../../src/img/teams/1.png'),require('../../../src/img/teams/2.png')]} latest />
          <Matches time="5:00" team={["Burnley","Liverpool"]} icon={[require('../../../src/img/teams/3.png'),require('../../../src/img/teams/4.png')]} />
          <Matches time="3:00" team={["Everton","Watford"]} icon={[require('../../../src/img/teams/5.png'),require('../../../src/img/teams/6.png')]} />
          <Matches time="9:00" team={["Blackpool","Burnley"]} icon={[require('../../../src/img/teams/7.png'),require('../../../src/img/teams/8.png')]} />
          <Matches time="12:00" team={["Everton","Wimbledon"]} icon={[require('../../../src/img/teams/3.png'),require('../../../src/img/teams/6.png')]}  />
        </ScrollView>
     </View>
   </View>
  </View>
 )
}
const styles = StyleSheet.create({
 container: {
   justifyContent: 'flex-start',
  //  backgroundColor: '#f9f0ff',
    backgroundColor: 'white',
   height: '100%',
   width: '100%',
  
 },
 main:{
  marginLeft : 20,
  marginRight : 20,
  margin: 20,
 },
 title:{
  fontSize: 25,
  color: '#120338'
 }
})