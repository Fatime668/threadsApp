import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {useEffect, useState} from 'react';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser, registerUser} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
};

const SignupScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();
  const {error, isAuthenticated} = useSelector((state: any) => state.user);

  useEffect(() => {
    if (error) {
      if(Platform.OS === 'android'){
        ToastAndroid.show(error, ToastAndroid.LONG);
      } else{
        Alert.alert(error);
      }
    }
    if (isAuthenticated) {
      loadUser()(dispatch);
    }
  }, [error, isAuthenticated]);

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null | any) => {
      if (image) {
        setAvatar('data:image/jpeg;base64,' + image.data);
      }
    });
  };

  const submitHandler = (e: any) => {
   if(avatar === '' || name === '' || email === ''){
    if(Platform.OS === 'android'){
    ToastAndroid.show('Please fill the all fields and upload avatar', ToastAndroid.LONG);
    } else{
      Alert.alert('Please fill the all fields and upload avatar')
    }
   } else{
    registerUser(name, email, password, avatar)(dispatch);
   }
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#0d0d0d"}}>
      <View style={{marginTop:40,flexDirection:"row",justifyContent:"center",alignItems:'center',position:'absolute',top:50,left:160}}>
          <Image source={require('../assets/Vector.png')} />
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text className="text-[25px] font-[600] text-center text-white mb-4">
          Sign Up
        </Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor={"#878787"}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={"#878787"}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholderTextColor={"#878787"}
        />
        <TouchableOpacity
          className="flex-row items-center"
          style={{position:'relative',left:-100}}
          onPress={uploadImage}>
          <Image
            source={{
              uri: avatar
                ? avatar
                : 'https://cdn-icons-png.flaticon.com/128/568/568717.png',
            }}
            className="w-[30px] h-[30px] "
            style={{backgroundColor:"#fff",padding:10}}
          />
          <Text className="text-white pl-2">upload image</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btn} className="mt-6" onPress={submitHandler}>
          <Text  style={{color:'#fff',textAlign:'center',fontSize:20,fontWeight:'bold'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
          className="pt-3 text-white"
          onPress={() => navigation.navigate('Login')}>
          Already have an account? <Text>Sign in</Text>
        </Text>
      </View>
      <View style={{marginBottom:10,flexDirection:"row",justifyContent:'center'}}>
        <Image  source={require('../assets/Meta.png')} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
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