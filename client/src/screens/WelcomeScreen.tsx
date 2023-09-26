import { Pressable,Button, StyleSheet,Image , Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}:any) => {
  return (
   
     <SafeAreaView style={{flex:1,backgroundColor:"#0d0d0d"}}> 
      <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: "white"
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: "white"
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "white",
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: "white",
                        }}>Calling, Enjoy Safe and private texting</Text>
                    </View>

                  <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Onboard")}>
                    <Text style={{color:"#fff",textAlign:'center',fontSize:18,fontWeight:"bold"}}>Join Now</Text>
                  </TouchableOpacity>

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                    </View>
                </View>
            </View>
    </SafeAreaView>

     
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  btn:{
    flexDirection:'row',
    width: 358,
    padding: 16,
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    backgroundColor:"#e3326f",
    borderRadius:50,
  }
})