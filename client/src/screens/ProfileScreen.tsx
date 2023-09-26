import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import {loadUser, logoutUser} from '../../redux/actions/userAction';
import PostCard from '../components/PostCard';
import InternetSvg from '../assets/svg/InternetSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';
import MenuSvg from '../assets/svg/MenuSvg';
import { useTranslation } from 'react-i18next';
type Props = {
  navigation: any;
};

const {width} = Dimensions.get('window');

const ProfileScreen = ({navigation}: Props) => {
  const [active, setActive] = useState(0);
  const {user} = useSelector((state: any) => state.user);
  const {posts} = useSelector((state: any) => state.post);
  const [data, setData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const dispatch = useDispatch();
  // const logoutHandler = async () => {
  //   logoutUser()(dispatch);
  // };
  const {t} = useTranslation()
  useEffect(() => {
    if (posts && user) {
      const myPosts = posts.filter((post: any) => post.user._id === user._id);
      setData(myPosts);
    }
  }, [posts, user]);

  useEffect(() => {
    if (posts && user) {
      const myReplies = posts.filter((post: any) =>
        post.replies.some((reply: any) => reply.user._id === user._id),
      );
      setRepliesData(myReplies.filter((post: any) => post.replies.length > 0));
    }
  }, [posts, user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#0d0d0d"}}>
      <SafeAreaView className="relative" style={{backgroundColor:"#0d0d0d"}}>
        <View
          style={{
            width: width,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:"center",
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
          <InternetSvg />
          </TouchableOpacity>
          <View style={{flexDirection:"row",alignItems:'center'}}>
           <TouchableOpacity>
           <InstagramSvg/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Menu")}>
           <MenuSvg/>
           </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            className="flex-row justify-between"
            style={{width: width, padding: 10}}>
            <View>
              <Text className="text-[#fff] text-[30px]" style={{fontWeight:"bold"}}>{user?.name}</Text>
             <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
             <Text className="text-[#fff] text-[20px]">
                {user?.userName}
              </Text>
             <View style={{padding:10,backgroundColor:"#131313",borderRadius:16}}>
             <Text style={{color:"#a0a0a0"}}>threads.net</Text>
             </View>
             </View>
            </View>

            <View className="relative">
              <Image
                source={{uri: user?.avatar.url}}
                height={80}
                width={80}
                borderRadius={100}
              />
              {user.role === 'Admin' && (
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828640.png',
                  }}
                  width={18}
                  height={18}
                  className="ml-2 absolute bottom-0 left-0"
                />
              )}
            </View>
          </View>
          <Text className="p-3 mt-[-20] text-[#fff] font-sans leading-6 text-[18px]">
            {user?.bio}
          </Text>
          <View className="p-3">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FollowerCard', {
                  followers: user?.followers,
                  following: user?.following,
                })
              }>
              <Text className="text-[16px] text-[#b8b8b8]">
                {user?.followers.length} {t('followers')}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="px-5 py-3" style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center',gap:10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Text
                className="pt-2"
                style={{
                  borderColor: '#2f2f2f',
                  textAlign:'center',
                  borderWidth: 1,
                  width: 176,
                  color:"#fff",
                  fontSize:18,
                  height:40,
                  borderRadius:15,
                  backgroundColor: 'transparent',
                }}>
                {t('edit')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="ml-5">
              <Text
                className="pt-2"
                style={{
                  borderColor: '#2f2f2f',
                  textAlign:'center',
                  borderWidth: 1,
                  width: 176,
                  color:"#fff",
                  fontSize:18,
                  height:40,
                  borderRadius:15,
                  backgroundColor: 'transparent',
                }}>
                 {t('share')}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            className="border-b border-b-[#00000032] px-4 py-3"
            style={{width: '100%'}}>
            <View className="w-[80%] m-auto flex-row justify-between">
              <TouchableOpacity onPress={() => setActive(0)}>
                <Text
                  className="text-[18px] pl-3 text-[#fff]"
                  style={{opacity: active === 0 ? 1 : 0.6}}>
                   {t('threads')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActive(1)}>
                <Text
                  className="text-[18px] pl-3 text-[#fff]"
                  style={{opacity: active === 1 ? 1 : 0.6}}>
                   {t('replies')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {active === 0 ? (
            <View className="w-[50%] absolute h-[1px] bg-white left-[-10px] bottom-0" />
          ) : (
            <View className="w-[50%] absolute h-[1px] bg-white right-[-10px] bottom-0" />
          )}
        </View>
        {active === 0 && (
          <>
            {data &&
              data.map((item: any) => (
                <PostCard navigation={navigation} key={item._id} item={item} />
              ))}
          </>
        )}

        {active === 1 && (
          <>
            {repliesData &&
              repliesData.map((item: any) => (
                <PostCard
                  navigation={navigation}
                  key={item._id}
                  item={item}
                  replies={true}
                />
              ))}
          </>
        )}

        {active === 0 && (
          <>
            {data.length === 0 && (
              <Text className="text-white text-[14px] mt-8 text-center">
                {t('you have no posts yet!')}
              </Text>
            )}
          </>
        )}

        {active === 1 && (
          <View>
            {repliesData.length === 0 && (
              <Text className="text-white text-[14px] mt-8 text-center">
               {t('you have no replies yet!')}
              </Text>
            )}
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
