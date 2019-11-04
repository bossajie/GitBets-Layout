import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image } from 'react-native'

export default function Matches({ time,icon,team,latest  }){
 return(
           <View style={[styles.container, latest ? { borderBottomWidth: 0,borderTopStartRadius:10, borderTopEndRadius: 10 } : null ]}>
               <View style={styles.matchContainer}>
                  <View>
                     <Text style={{ fontSize: 12 }}>{time}</Text>
                     <Text style={{ marginTop: 5, fontSize: 12, color: 'red' }}>• LIVE</Text>
                  </View>
                  <View>
                     <View style={styles.teamName}>
                        <Image source={icon[0]} style={styles.img}/>
                        <Text>{team[0]}</Text>
                     </View>
                     <View style={[styles.teamName, {marginTop: 5} ]}>
                        <Image source={icon[1]} style={styles.img}/>
                        <Text>{team[0]}</Text>
                     </View>
                  </View>
                  <View style={styles.score}>
                     <Text>0</Text>
                     <Text style={{ marginTop: 5 }}>0</Text>
                  </View>
                  <View style={{ borderLeftColor: 'black', borderLeftWidth: 1 }}></View>
                  <View style={styles.graph}>
                     <Image source={require('../../../src/img/bar-graph.png')} style={{ resizeMode: 'contain', width: 25, height: 25 }} />
                  </View>
               </View>
               <View style={styles.oddsContainer}>
                  <View style={styles.odds}>
                     <Text style={styles.oddsText}>1.48</Text>
                  </View>
                  <View style={styles.odds}>
                     <Text style={styles.oddsText}>2.84</Text>
                  </View>
                  <View style={styles.odds}>
                     <Text style={styles.oddsText}>1.73</Text>
                  </View>
               </View>
            </View>
 )
}

const styles = StyleSheet.create({
   container: {
      height:  120,
      padding: 15,
      borderWidth: 2,
      borderColor: '#e7e6e8',
      borderRadius: 10,
      borderBottomWidth: 0,
      borderBottomEndRadius: 0,
      borderBottomStartRadius: 0,
      borderTopStartRadius: 0,
      borderTopEndRadius : 0,
   },
   matchContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   teamName: {
      width: '80%',
      flexDirection: 'row',
   },
   score:{
      marginLeft: '20%',
   },
   graph:{
      justifyContent: 'center'
   },
   oddsContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
   },
   odds:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
      padding: 8,
      borderColor: '#e7e6e8',
      backgroundColor: '#f7f7f7',
      borderWidth: 1,
      marginRight: 10,
      borderRadius: 5,
   },
   oddsText:{
      fontSize: 13,
   },
   img:{
      resizeMode: 'contain',
      width: 20,
      height: 20,
      marginRight: 5
   }
})