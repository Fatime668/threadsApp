import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  followUserAction,
  getAllUsers,
  unfollowUserAction,
} from '../../redux/actions/userAction';
import Loader from '../common/Loader';
import SearchSvg2 from '../assets/svg/SearchSvg2';
import { useTranslation } from 'react-i18next';
type Props = {
  navigation: any;
};

const SearchScreen = ({navigation}: Props) => {
  const [data, setData] = useState([
    {
      name: '',
      userName: '',
      avatar: {url: ''},
      followers: [],
    },
  ]);
  const {users, user, isLoading} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const {t} = useTranslation()
  useEffect(() => {
    getAllUsers()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

  const handleSearchChange = (e: any) => {
    if (e.length !== 0) {
      const filteredUsers =
        users &&
        users.filter((i: any) =>
          i.name.toLowerCase().includes(e.toLowerCase()),
        );
      setData(filteredUsers);
    } else {
      setData(users);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={{backgroundColor: '#0d0d0d',flex:1}}>
          <View className="p-3" style={{backgroundColor: '#0d0d0d'}}>
            <Text className="text-[30px] text-[#fff] font-[600]">{t('search')}</Text>
            <View className="relative" style={{marginBottom:20}}>
              
              <View className="absolute top-[20px] left-2" style={{"position":'absolute',zIndex: 111,}}>
                <SearchSvg2 />
              </View>
              <TextInput
                onChangeText={e => handleSearchChange(e)}
                placeholder={t('search')}
                placeholderTextColor={'#a0a0a0'}
                style={{fontSize: 16, backgroundColor: '#1a1a1a'}}
                className="w-full  h-[38px]  rounded-[8px] pl-10 text-[#fff] mt-[10px]"
              />
            </View>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: any) => {
                const handleFollowUnfollow = async (e: any) => {
                  try {
                    if (e.followers.find((i: any) => i.userId === user._id)) {
                      await unfollowUserAction({
                        userId: user._id,
                        users,
                        followUserId: e._id,
                      })(dispatch);
                    } else {
                      await followUserAction({
                        userId: user._id,
                        users,
                        followUserId: e._id,
                      })(dispatch);
                    }
                  } catch (error) {
                    console.log(error, 'error');
                  }
                };
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserProfile', {
                        item: item,
                      })
                    }>
                    <View className="flex-row my-3">
                      <Image
                        source={{uri: item?.avatar?.url}}
                        width={30}
                        height={30}
                        borderRadius={100}
                      />
                      <View className="w-[90%] flex-row justify-between border-b border-[#00000020] pb-2">
                        <View>
                          <View className="flex-row items-center relative">
                            <Text className="pl-3 text-[19px] text-white">
                              {item.name}
                            </Text>
                            {item?.role === 'Admin' && (
                              <Image
                                source={{
                                  uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828640.png',
                                }}
                                width={18}
                                height={18}
                                className="ml-1"
                              />
                            )}
                          </View>

                          <Text
                            className="pl-3 text-[16px] mt-1"
                            style={{color: '#b8b8b8'}}>
                            {item.userName}
                          </Text>
                          <Text className="pl-3 mt-3 text-[16px] text-[#fff]">
                            {item.followers.length} {t('followers')}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            className="rounded-[8px] w-[110px] flex-row justify-center items-center"
                            style={{
                              borderWidth: 1,
                              borderColor: '#393939',
                              height: 40,
                            }}
                            onPress={() => handleFollowUnfollow(item)}>
                            <Text className="" style={{color: '#fff',fontSize:16}}>
                              {item.followers.find(
                                (i: any) => i.userId === user._id,
                              )
                              ? `${t('following')}`
                              : `${t('follow')}`}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default SearchScreen;
