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
import axios from 'axios';
import { URI } from '../../redux/URI';
  
  const ConfirmScreen = ({navigation}: any) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);
    // for timer
    const [counter, setCounter] = useState(120);
  
    const handleOtpChange = (index: number, value: string) => {
      setOtp(prevOtp => {
        const otpArray = [...prevOtp];
        otpArray[index] = value;
        return otpArray;
      });
  
      if (index < 3 && value !== '') {
        const nextIndex = index + 1;
        inputRefs.current[nextIndex]?.focus();
      }
    };
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setCounter(prevCounter => {
          if (prevCounter === 1) {
            clearInterval(timerInterval);
          }
          return prevCounter - 1;
        });
      }, 1000);
  
      return () => {
        clearInterval(timerInterval);
      };
    }, []);
  
    const handleResendOTP = () => {
      setCounter(120);
    };
     
    const handlePost=async()=>{
        const {data} = await axios.post(
            `${URI}/registration`,
            {
                otp
            },
          );
    }

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
            Verification
          </Text>
        </View>
  
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View>
            <Text style={{fontSize: 24, fontWeight: '500', marginTop: 35}}>
              OTP
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: '300',
                lineHeight: 35,
              }}>
              Please type the verification code sent to
            </Text>
            <Text style={{fontWeight: '600'}}>fatime.hesenzade@gmail.com</Text>
  
            <View style={styles.container}>
              <TextInput
                ref={ref => (inputRefs.current[0] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[0]}
                onChangeText={value => handleOtpChange(0, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[1] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[1]}
                onChangeText={value => handleOtpChange(1, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[2] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[2]}
                onChangeText={value => handleOtpChange(2, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[3] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[3]}
                onChangeText={value => handleOtpChange(3, value)}
                keyboardType="numeric"
              />
            </View>
  
            <View style={{alignItems: 'center', rowGap: 5}}>
              {/* disabled={counter > 1} */}
              <View style={{flexDirection: 'row'}}>
                <Text>Don't receive the OTP? </Text>
                <TouchableOpacity onPress={handleResendOTP}>
                  <Text style={{color: counter > 1 ? '#888' : '#000'}}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontWeight: '600'}}>{`${Math.floor(counter / 60)
                .toString()
                .padStart(2, '0')} : ${Math.floor(counter % 60)
                .toString()
                .padStart(2, '0')}`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.davamBtn}
           >
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ConfirmScreen;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 20,
      columnGap: 8,
      paddingBottom: 10,
    },
    input: {
      width: 75,
      height: 75,
      borderWidth: 1,
      borderColor: '#F2F4F7',
      backgroundColor: '#F2F4F7',
      borderRadius: 8,
      textAlign: 'center',
      marginHorizontal: 5,
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