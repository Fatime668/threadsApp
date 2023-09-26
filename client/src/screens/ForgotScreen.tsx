import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  import SvgBack from '../assets/svg/BackIcon';
  
  const ForgotScreen = ({navigation}: any) => {
   
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgBack />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: '30%',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Forgot
          </Text>
        </View>
  
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View >
            <Text style={{fontSize: 30, fontWeight: '500', marginTop: 35,textAlign:'center'}}>
              Forgot Password ?
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: '300',
                lineHeight: 35,
                textAlign:'center'
              }}>
              Please enter your email
            </Text>
          
  
            <View style={styles.container}>
              <TextInput
              placeholder='Enter your email ...'
                style={styles.input}
              />
              
            </View>
  
          </View>
          <TouchableOpacity
            style={styles.davamBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ForgotScreen;
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
    },
    input: {
      width: "100%",
      paddingLeft:20,
      height: 50,
      borderWidth: 1,
      borderColor: '#F2F4F7',
      backgroundColor: '#F2F4F7',
      borderRadius: 8,
      fontSize: 20,
    },
    davamBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d0d0d',
      paddingVertical: 16,
      borderWidth: 1,
      borderColor: '#155EEF',
      borderRadius: 8,
      marginTop: 20,
      marginBottom: 30,
    },
  });