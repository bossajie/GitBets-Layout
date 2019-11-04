import React from 'react'
import { StyleSheet,Text,View,ScrollView,Image, TouchableOpacity } from 'react-native'

export default function LiveMatches({navigation}){
 return(
  <View style={styles.container}>
     <ScrollView horizontal={true}>
        {/* Match 1 */}
        <TouchableOpacity style={styles.match} onPress={ ()=>navigation.navigate('Detail')}>
         <View style={styles.progressLayer}></View>
         <Image source={teams.a.source} style={styles.img} />
         <View style={styles.score}>
            <Text style={{ fontSize : 12, color: '#120338', fontWeight: 'bold' }}>0 : 2</Text>
         </View>
         <View style={styles.vs}><Text style={{ fontSize:11, color: '#120338' }}>VS</Text></View>
         <Image source={teams.b.source} style={styles.img}/>
        </TouchableOpacity>
        {/* Match 2 */}
        <TouchableOpacity style={styles.match}>
         <View style={[styles.progressLayer,{ borderLeftColor: 'transparent'}]}></View>
         <Image source={teams.c.source} style={styles.img} />
         <View style={styles.score}>
            <Text style={{ fontSize : 12, color: '#120338', fontWeight: 'bold' }}>1 : 1</Text>
         </View>
         <View style={styles.vs}><Text style={{ fontSize:11, color: '#120338' }}>VS</Text></View>
         <Image source={teams.d.source} style={styles.img} />
        </TouchableOpacity>
         {/* Match 3 */}
         <TouchableOpacity style={styles.match}>
            {/* <View style={styles.progressLayer}></View> */}
            <View style={styles.offsetLayer}></View>
               <Image source={teams.e.source} style={styles.img} />
               <View style={styles.score}>
                  <Text style={{ fontSize : 12, color: '#120338', fontWeight: 'bold' }}>1 : 0</Text>
               </View>
               <View style={styles.vs}><Text style={{ fontSize:11, color: '#120338' }}>VS</Text></View>
            <Image source={teams.f.source} style={styles.img} />
        </TouchableOpacity>
         {/* Match 4 */}
         <TouchableOpacity style={styles.match}>
            <View style={styles.progressLayer}></View>
               <Image source={teams.g.source} style={styles.img} />
               <View style={styles.score}>
                  <Text style={{ fontSize : 12, color: '#120338', fontWeight: 'bold' }}>2 : 2</Text>
               </View>
               <View style={styles.vs}><Text style={{ fontSize:11, color: '#120338' }}>VS</Text></View>
            <Image source={teams.h.source} style={styles.img} />
        </TouchableOpacity>
     </ScrollView>
  </View>
 )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 20
   },
   img:{
      resizeMode: 'contain',
      width: 25,
      height: 25,
      marginLeft: 15,
      marginRight: 10
   },
   progressLayer:{
      width: 88,
      height: 70,
      borderWidth: 1.5,
      position: 'absolute',
      borderRadius : 35,
      borderRightColor: 'transparent',
      borderBottomColor: '#6a47ed',
      borderLeftColor: '#6a47ed',
      borderTopColor: 'transparent',
      left: -1,

   },
   // dummy third    
   offsetLayer:{
      width: 45,
      height: 70,
      borderWidth: 1.5,
      position: 'absolute',
      // borderRadius : 15,
      borderRightColor: 'transparent',
      borderBottomColor: '#6a47ed',
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      left: 30,
   },
   match:{
      justifyContent: 'center',
      alignItems: 'center ',
      width: 130,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#e7e6e8',
      borderRadius : 100,
      marginBottom: 15,
      marginRight: 10
   },
   score:{
      position: 'absolute',
      right: '45%',
      left: '45%',
      margin: 1,
   },
   vs:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom: '-60%',
      borderRadius: 10,
      // width: 40,
      borderWidth: 1,
      backgroundColor: 'white',
      borderColor: '#e7e6e8',
      padding: 5
   },
})

const teams=
   {
      a: {
         source: require('../../../src/img/teams/1.png')
      },
      b: {
         source: require('../../../src/img/teams/2.png')
      },
      c: {
         source: require('../../../src/img/teams/3.png')
      },
      d: {
         source: require('../../../src/img/teams/4.png')
      },
      e: {
         source: require('../../../src/img/teams/5.png')
      },
      f: {
         source: require('../../../src/img/teams/6.png') 
      },
      g: {
         source: require('../../../src/img/teams/7.png')
      },
      h: {
         source: require('../../../src/img/teams/8.png')
      },
      i: {
         source: require('../../../src/img/teams/9.png')
      },
      j: {
         source: require('../../../src/img/teams/10.png')
      }
   }
