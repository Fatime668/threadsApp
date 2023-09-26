import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import axios from 'axios';
import {URI} from '../../redux/URI';
import {loadUser} from '../../redux/actions/userAction';
import CloseSvg from '../assets/svg/CloseSvg'
import Lock from '../assets/svg/Lock'
import { useTranslation } from 'react-i18next';
type Props = {
  navigation: any;
};

const EditProfile = ({navigation}: Props) => {
  const {user, token} = useSelector((state: any) => state.user);
  const [avatar, setAvatar] = useState(user?.avatar?.url);
  const dispatch = useDispatch();
  const {t} = useTranslation()
  const [userData, setUserData] = useState({
    name: user.name,
    userName: user?.userName,
    bio: user?.bio,
  });

  const handleSubmitHandler = async () => {
    if (userData.name.length !== 0 && userData.userName.length !== 0) {
        await axios.put(`${URI}/update-profile`,{
            name: userData.name,
            userName: userData.userName,
            bio: userData.bio,
        },{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }).then((res:any) => {
            loadUser()(dispatch);
        })
    }
  };

  const ImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null | any) => {
      if (image) {
        // setImage('data:image/jpeg;base64,' + image.data);
        axios
          .put(
            `${URI}/update-avatar`,
            {
              avatar: 'data:image/jpeg;base64,' + image?.data,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((res: any) => {
            loadUser()(dispatch);
          });
      }
    });
  };

  return (
    <SafeAreaView style={{backgroundColor:"#0d0d0d",flex:1}}>
      <View className="flex-row items-center justify-between p-3">
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
           <CloseSvg/>
          </TouchableOpacity>
          <Text className="text-[20px] mb-2 left-4 font-[600] text-[#fff]">
            {t('edit')}
          </Text>
        </View>
        <TouchableOpacity onPress={handleSubmitHandler}>
          <Text className="text-[20px] text-white">Done</Text>
        </TouchableOpacity>
      </View>
      <View className="h-[90%] items-center justify-center">
        <View className="w-[90%] p-3 min-h-[300] h-max border rounded-[10px] border-[#424141]">
          <View className="flex-row">
            <View className="w-full flex-row justify-between">
              <View>
                <Text className="text-[18px] mb-2 font-[600] text-white">Name</Text>
               <View>
               <TextInput
                  value={userData.name}
                  onChangeText={e => setUserData({...userData, name: e})}
                  placeholder="Enter your name..."
                  placeholderTextColor={'#fff'}
                  className="text-[16px] text-[#fff]"
                />
               <View style={{flexDirection:'row',alignItems:'center',gap:5 ,marginTop:5,marginBottom:10}} >
               <TextInput
                  value={userData.userName}
                  onChangeText={e => setUserData({...userData, userName: e})}
                  placeholder="Enter your userName..."
                  placeholderTextColor={'#fff'}
                  className="text-[16px]  text-[#fff]"
                />
                <Lock/>
               </View>

               </View>
              </View>
              <TouchableOpacity onPress={ImageUpload}>
                <Image
                  source={{uri: avatar}}
                  width={60}
                  height={60}
                  borderRadius={100}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full border-t border-[#484545] pt-2">
            <Text className="text-[18px] font-[600] text-white">Bio</Text>
            <TextInput
              value={userData.bio}
              onChangeText={e => setUserData({...userData, bio: e})}
              placeholder="Enter your bio..."
              placeholderTextColor={'#fff'}
              className="text-[16px] text-[#fff]"
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
