import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import getTimeDuration from '../common/TimeGenerator';
import axios from 'axios';
import {URI} from '../../redux/URI';
import { getAllPosts } from '../../redux/actions/postAction';
import CloseSvg from '../assets/svg/CloseSvg'
type Props = {
  item: any;
  navigation: any;
  route: any;
  postId: string;
};

const CreateRepliesScreen = ({navigation, route}: Props) => {
  const post = route.params.item;
  const postId = route.params.postId;
  const {user, token} = useSelector((state: any) => state.user);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const ImageUpload = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null | any) => {
      if (image) {
        setImage('data:image/jpeg;base64,' + image.data);
      }
    });
  };

  const time = post.createdAt;
  const formattedDuration = getTimeDuration(time);

  const createReplies = async () => {
    if (!postId) {
      await axios
        .put(
          `${URI}/add-replies`,
          {
            postId: post._id,
            title,
            image,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res: any) => {
          getAllPosts()(dispatch);
          navigation.navigate('PostDetails', {
            data: res.data.post,
            navigation: navigation,
          });
          setTitle('');
          setImage('');
        });
    } else {
      console.log(postId,post._id);
      await axios
        .put(
          `${URI}/add-reply`,
          {
            postId,
            replyId: post._id,
            title,
            image,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res: any) => {
          navigation.navigate('PostDetails', {
            data: res.data.post,
            navigation: navigation,
          });
          setTitle('');
          setImage('');
        });
    }
  };
  return (
    <SafeAreaView style={{backgroundColor:"#0d0d0d",flex:1}}>
      <View className="flex-row items-center pl-3 pr-3">
        <TouchableOpacity style={{marginBottom:-8}} onPress={() => navigation.goBack()}>
          <CloseSvg/>
        </TouchableOpacity>
        <Text className="text-[20px] left-4 font-[600] text-[#fff]">Reply</Text>
      </View>
      <View className="h-[88vh] justify-between flex-col">
        <ScrollView className="relative" showsVerticalScrollIndicator={false}>
          <View className="flex-row w-full justify-between p-3">
            <View className="flex-row items-center">
              <Image
                source={{uri: post.user.avatar.url}}
                width={40}
                height={40}
                borderRadius={100}
              />
              <View className="pl-3">
                <Text className="text-white font-[500] text-[18px]">
                  {post.user.name}
                </Text>
                <Text className="text-white font-[500] text-[16px]">
                  {post.title}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[#a0a0a0]">{formattedDuration}</Text>
              <TouchableOpacity>
                <Text className="text-[#fff] pl-4 font-[700] mb-[8px]">
                  ...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="ml-[50px] my-3">
            {post.image && (
              <Image
                source={{uri: post.image.url}}
                style={{
                  width: '90%',
                  aspectRatio: 1,
                  borderRadius: 10,
                  zIndex: 1111,
                }}
                resizeMode="contain"
              />
            )}
          </View>
          {post.image ? (
            <View className="absolute top-[65] left-8 h-[68%] w-[1px] bg-[#a0a0a0]" />
          ) : (
            <View className="absolute top-12 left-5 h-[60%] w-[1px] bg-[#a0a0a0]" />
          )}

          <View className="p-3">
            <View className="flex-row">
              <Image
                source={{uri: user.avatar.url}}
                width={40}
                height={40}
                borderRadius={100}
              />
              <View className="pl-3">
                <Text className="text-white mb-2 font-[500] text-[18px]">
                  {user.name}
                </Text>
                <TextInput
                  placeholder={`Reply to ${post.user.name}...`}
                  placeholderTextColor={'#666'}
                  className="mt-[-5px] ml-0 text-white"
                  value={title}
                  onChangeText={setTitle}
                />
                <TouchableOpacity className="mt-2" onPress={ImageUpload}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/10857/10857463.png',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {image && (
                <Image
                  source={{uri: image}}
                  style={{
                    width: '85%',
                    aspectRatio: 1,
                    borderRadius: 10,
                    zIndex: 1111,
                    marginLeft: 45,
                    marginVertical: 20,
                  }}
                />
              )}
            </View>
          </View>
        </ScrollView>
        <View>
          <View className="p-2">
            <View className="w-full flex-row justify-between">
              <Text className="left-3 text-[#fff]">Anyone can reply</Text>
              <TouchableOpacity onPress={createReplies}>
                <Text className="text-[#1977f2] mr-[10px]">Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateRepliesScreen;
