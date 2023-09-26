import { Dimensions, Image , StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {  Svg} from 'react-native-svg';

const Onboarding = ({navigation}:any) => {
  const {height,width} = Dimensions.get('window')

  return (
    <SafeAreaView style={{backgroundColor:"#0d0d0d",flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <Svg  width={width} height={height}>
        <Image width={width} height={height/1.2}  source={require('../assets/Pattern.png')} />
      </Svg>
      <View className="w-[80%] " style={{top:-120,borderWidth:1,borderColor:"#312E2E",borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
       <View>
       <TouchableOpacity onPress={()=>navigation.navigate("Login")} className="w-full text-[#fff]  pt-[14px] ] h-[45px] mb-2 "style={{borderRadius:35}}>
            <Text style={{color:'#ccc',marginLeft:15,fontSize:20,fontWeight:'400'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Signup")} className="w-full text-[#fff]  pt-[px] ] h-[45px] "style={{borderRadius:35}}>
            <Text style={{color:'#ccc',marginLeft:15,fontSize:20,fontWeight:'400'}}>Register</Text>
        </TouchableOpacity>
       </View>
       <View style={{marginRight:20,width:46,height:46}}>
        <Image source={require('../assets/Instagram.png')}/>
       </View>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})