import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ToastAndroid,
  Platform,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {loadUser, loginUser} from '../../redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  navigation: any;
};

const LoginScreen = ({navigation}: Props) => {
  const {error, isAuthenticated} = useSelector((state: any) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e: any) => {
    loginUser(email, password)(dispatch);
  };

  useEffect(() => {
    if (error) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(
          'Email and password not matching!',
          ToastAndroid.LONG,
        );
      } else {
        Alert.alert('Email and password not matching!');
      }
    }
    if (isAuthenticated) {
      loadUser()(dispatch);
      if (Platform.OS === 'android') {
      ToastAndroid.show('Login successful!', ToastAndroid.LONG);
      } else{
        Alert.alert('Login successful!');
      }
    }
  }, [isAuthenticated, error]);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#0d0d0d"}}>
      <View style={{marginTop:70,flexDirection:"row",justifyContent:"center",alignItems:'center',position:'absolute',top:50,left:160}}>
          <Image source={require('../assets/Vector.png')} />
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text className="text-[25px] font-[600] text-center text-white mb-4">
          Login
        </Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          placeholderTextColor={"#878787"}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          placeholderTextColor={"#878787"}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity  style={styles.btn}>
          <Text
            
             style={{color:'#fff',textAlign:'center',fontSize:20,fontWeight:'bold'}}
            onPress={submitHandler}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          className="pt-3 text-white"
          onPress={() => navigation.navigate('Signup')}>
          Don't have any account? <Text>Sign up</Text>
        </Text>
      </View>
      <View style={{marginBottom:10,flexDirection:"row",justifyContent:'center'}}>
        <Image  source={require('../assets/Meta.png')} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  input:{
    flexDirection:"row",
    width:358,
    marginBottom:15,
    paddingVertical:24,
    paddingHorizontal:16,
    alignItems:'center',
    gap:10,
    color:"#fff",
    borderRadius:10,
    // backgroundColor:"#fff",
    borderWidth:0.5, 
    borderColor:"#312E2E" 
  },
  btn:{
    flexDirection:'row',
    width: 358,
    padding: 16,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    backgroundColor:"#0070FA",
    borderRadius:50,
  }
})