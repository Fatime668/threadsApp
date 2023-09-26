import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SplashScreen = ({props}:any) => {
  const [authLoaded,setAuthLoaded] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setAuthLoaded(true)
    },5000)
  }, [])
  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace("Home")
    }
  }, [authLoaded,props.navigation])
  
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})