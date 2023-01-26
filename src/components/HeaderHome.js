import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';

const HeaderHome = () => {
  return (
<>
    <View style={{width:'auto', margin:10}}>
 

    </View>
    <View style={{width:'auto', backgroundColor:'#fff', marginHorizontal:10, borderRadius:10, paddingHorizontal:15, paddingVertical:15, justifyContent:'center', alignItems:'flex-start'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
         <View style={{alignItems:'center', flex:1}}>
            <Image source={require('./../img/user.png')} style={{width:50, height:50, borderRadius:50}}/>
         </View>
         <View style={{alignItems:'start', flex:4, marginHorizontal:15}}>
            <Text>Hello</Text>
            <Text style={{fontSize:24,fontWeight:'700'}}>M. Fadlullah. A.Y</Text>
         </View>
        
        </View>
    </View>
</>
  )
}

export default HeaderHome