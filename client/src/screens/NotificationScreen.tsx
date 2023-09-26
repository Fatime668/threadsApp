import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getNotifications} from '../../redux/actions/notificationAction';
import {useDispatch, useSelector} from 'react-redux';
import getTimeDuration from '../common/TimeGenerator';
import axios from 'axios';
import {URI} from '../../redux/URI';
import Loader from '../common/Loader';
import { useTranslation } from 'react-i18next';
type Props = {
  navigation: any;
};

const NotificationScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {notifications, isLoading} = useSelector(
    (state: any) => state.notification,
  );
  const [refreshing, setRefreshing] = useState(false);
  const {posts} = useSelector((state:any) => state.post);
  const {token, users} = useSelector((state: any) => state.user);
  const [active, setActive] = useState(0);
  const refreshingHeight = 100;
  const {t} = useTranslation()
  const labels = [`${t('all')}`, `${t('replies')}`, `${t('mentions')}`];

  const handleTabPress = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    getNotifications()(dispatch);
  }, []);
  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SafeAreaView style={{flex:1,backgroundColor:"#0d0d0d"}}>
            <View className="p-3 mb-[190px]">
              <Text className="text-3xl font-[700] text-white">{t('activity')}</Text>

              <View className="w-full flex-row my-3 justify-between">
                {labels.map((label, index) => (
                  <TouchableOpacity
                    key={index}
                    className="w-[105px] h-[38px] rounded-[8px]"
                    style={{
                      backgroundColor: active === index ? '#fff' : '#000',
                      borderWidth: active === index ? 0 : 1,
                      borderColor: '#2f2f2f',
                    }}
                    onPress={() => handleTabPress(index)}>
                    <Text
                      className={`${
                        active !== index ? 'text-white' : 'text-[#000]'
                      } text-[18px] font-[400] text-center pt-[6px]`}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* All activites */}
              {active === 0 && notifications.length === 0 && (
                <View className="w-full h-[80px] flex items-center justify-center">
                  <Text className='text-[16px] text-white mt-5'>{t('no activity')}</Text>
                </View>
              )}

              {/* All Replies */}
              {active === 1 && (
                <View className="w-full h-[80px] flex items-center justify-center">
                  <Text className='text-[16px] text-white mt-5'>{t('no replies')}</Text>
                </View>
              )}

              {/* All Replies */}
              {active === 2 && (
                <View className="w-full h-[80px] flex items-center justify-center">
                  <Text className='text-[16px] text-white mt-5'>{t('no mentions')}</Text>
                </View>
              )}

              {active === 0 && (
                <FlatList
                  data={notifications}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={() => {
                        setRefreshing(true);
                        getNotifications()(dispatch).then(() => {
                          setRefreshing(false);
                        });
                      }}
                      progressViewOffset={refreshingHeight}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    const time = item.createdAt;
                    const formattedDuration = getTimeDuration(time);
                    

                    const handleNavigation = async (e: any) => {
                      const id = item.creator._id;

                      await axios
                        .get(`${URI}/get-user/${id}`, {
                          headers: {Authorization: `Bearer ${token}`},
                        })
                        .then(res => {
                          if(item.type === "Follow"){
                            navigation.navigate('UserProfile', {
                              item: res.data.user,
                            });
                          } else{
                            navigation.navigate('PostDetails', {
                              data: posts.find((i:any) => i._id === item.postId)
                            });
                          }
                        });
                    };

                    return (
                      <TouchableOpacity onPress={() => handleNavigation(item)}>
                        <View className="flex-row" key={item._id}>
                          <View className="relative">
                            <Image
                              source={{
                                uri: users.find(
                                  (user: any) => user._id === item.creator._id,
                                )?.avatar.url,
                              }}
                              width={40}
                              height={40}
                              borderRadius={100}
                            />
                            {item.type === 'Like' && (
                              <View className="absolute bottom-5 border-[2px] border-[#fff] right-[-5px] h-[25px] w-[25px] bg-[#eb4545] rounded-full items-center justify-center flex-row">
                                <Image
                                  source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png',
                                  }}
                                  tintColor={'#fff'}
                                  width={15}
                                  height={15}
                                />
                              </View>
                            )}

                            {item.type === 'Follow' && (
                              <View className="absolute bottom-5 border-[2px] border-[#fff] right-[-5px] h-[25px] w-[25px] bg-[#5a49d6] rounded-full items-center justify-center flex-row">
                                <Image
                                  source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
                                  }}
                                  tintColor={'#fff'}
                                  width={12}
                                  height={12}
                                />
                              </View>
                            )}

                        
                          </View>
                          <View className="pl-3 my-2">
                            <View className="flex-row w-full items-center border-b pb-3 border-[]">
                              <View className="w-full">
                                <View className="flex-row items-center">
                                  <Text className="text-[18px] text-white font-[600]">
                                    {item.creator.name}
                                  </Text>
                                  <Text className="pl-2 text-[16px] text-[#ccc] font-[600]">
                                    {formattedDuration}
                                  </Text>
                                </View>
                                <Text className="text-[16px] text-[#ccc] font-[600]">
                                  {item.title}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              )}
            </View>
          </SafeAreaView>
        </>
      )}
    </>
  );
};

export default NotificationScreen;
