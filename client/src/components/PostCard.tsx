import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';
import getTimeDuration from '../common/TimeGenerator';
import {
  addLikes,
  getAllPosts,
  removeLikes,
} from '../../redux/actions/postAction';
import axios from 'axios';
import {URI} from '../../redux/URI';
import PostDetailsCard from './PostDetailsCard';
import LikeSvg2 from '../assets/svg/LikeSvg2'
import LikeSvg3 from '../assets/svg/LikeSvg3'
import CommentSvg from '../assets/svg/CommentSvg'
import RepostSvg from '../assets/svg/RepostSvg'
import SendSvg from '../assets/svg/SendSvg'

type Props = {
  navigation: any;
  item: any;
  isReply?: boolean | null;
  postId?: string | null;
  replies?: boolean | null;
};

const PostCard = ({item, isReply, navigation, postId, replies}: Props) => {
  const {user, token,users} = useSelector((state: any) => state.user);
  const {posts} = useSelector((state: any) => state.post);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<any>({
    name: '',
    avatar: {
      url: 'https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png',
    },
  });
  const time = item?.createdAt;
  const formattedDuration = getTimeDuration(time);

  const profileHandler = async (e: any) => {
    await axios
      .get(`${URI}/get-user/${e._id}`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        if (res.data.user._id !== user._id) {
          navigation.navigate('UserProfile', {
            item: res.data.user,
          });
        } else {
          navigation.navigate('Profile');
        }
      });
  };

  const reactsHandler = (e: any) => {
    if (item.likes.length !== 0) {
      const isLikedBefore = item.likes.find((i: any) => i.userId === user._id);
      if (isLikedBefore) {
        removeLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
      } else {
        addLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
      }
    } else {
      addLikes({postId: postId ? postId : e._id, posts, user})(dispatch);
    }
  };

  const deletePostHandler = async (e: any) => {
    await axios
      .delete(`${URI}/delete-post/${e}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        getAllPosts()(dispatch);
      });
  };

  useEffect(() => {
   if(users){
    const updatedUsers = [...users, user];
    const userData = updatedUsers.find((user: any) =>
        user._id === item.user._id
     );
     setUserInfo(userData);
   }
  }, [users]);

  return (
    <View className="p-[15px] border-b border-b-[#424242]">
      <View className="relative">
        <View className="flex-row w-full">
          <View className="flex-row w-[85%] items-center">
            <TouchableOpacity onPress={() => profileHandler(item.user)}>
              <Image
                source={{uri: userInfo?.avatar?.url}}
                width={40}
                height={40}
                borderRadius={100}
              />
            </TouchableOpacity>
            <View className="pl-3 w-[70%]">
              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => profileHandler(userInfo)}>
                <Text className="text-white font-[500] text-[16px]" style={{marginBottom:5}}>
                  {userInfo?.name}
                </Text>
                {userInfo?.role === 'Admin' && (
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828640.png',
                    }}
                    width={15}
                    height={15}
                    className="ml-1"
                  />
                )}
              </TouchableOpacity>
              <Text className="text-white font-[500] text-[13px]">
                {item.title}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#000000b6]" style={{color:'gray'}}>{formattedDuration}</Text>
            <TouchableOpacity
              onPress={() => item.user._id === user._id && setOpenModal(true)}>
              <Text className="text-[#fff] pl-4 font-[700] mb-[8px]">...</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="ml-[50px] my-3">
          {item.image && (
            <Image
              source={{uri: item.image.url}}
              style={{aspectRatio: 1, borderRadius: 10, zIndex: 1111}}
              resizeMode="contain"
            />
          )}
        </View>
        {item.image ? (
          <View className="absolute top-12 left-5 h-[90%]" style={{backgroundColor:"gray",width:1}} />
        ) : (
          <View className="absolute top-12 left-5 h-[60%]" style={{backgroundColor:"gray",width:1}} />
        )}
        <View className="flex-row items-center left-[50px] top-[5px]">
          <TouchableOpacity onPress={() => reactsHandler(item)}>
            {item.likes.length > 0 ? (
              <>
                {item.likes.find((i: any) => i.userId === user._id) ? (
                  <LikeSvg3/>
                ) : (
                  <LikeSvg2/>
                )}
              </>
            ) : (
              <LikeSvg2/>

            )}
          </TouchableOpacity>
          <TouchableOpacity
           style={{marginLeft:5}}
            onPress={() => {
              navigation.navigate('CreateReplies', {
                item: item,
                navigation: navigation,
                postId: postId,
              });
            }}>
           <CommentSvg/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:5}}>
           <RepostSvg/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:5}}>
           <SendSvg/>
          </TouchableOpacity>
        </View>
        {!isReply && (
          <View className="pl-[50px] pt-4 flex-row">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PostDetails', {
                  data: item,
                })
              }>
              <Text className="text-[16px[ text-[#a0a0a0]">
                {item?.replies?.length !== 0 &&
                  `${item?.replies?.length} replies ·`}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                item.likes.length !== 0 &&
                navigation.navigate('PostLikeCard', {
                  item: item.likes,
                  navigation: navigation,
                })
              }>
              <Text className="text-[16px[ text-[#a0a0a0]">
                {item.likes.length} {item.likes.length > 1 ? 'likes' : 'like'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {replies && (
          <>
            {item?.replies?.map((i: any) => (
              <PostDetailsCard
                navigation={navigation}
                key={i._id}
                item={i}
                isReply={true}
                postId={item._id}
              />
            ))}
          </>
        )}
        {openModal && (
          <View className="flex-[1] justify-center items-center mt-[22]">
            <Modal
              animationType='slide'
              transparent={true}
              visible={openModal}
              onRequestClose={() => {
                setOpenModal(!openModal);
              }}>
              <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>

                <View className="flex-[1] justify-end">
              <View style={{width:60,height:4,backgroundColor:"#2f2f2f",borderRadius:25,bottom:-15,zIndex:999,left:'43%'}}></View>

                  <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
                    <View className="w-full bg-[#1a1a1a] h-[150] rounded-[20px] p-[20px] items-center shadow-[#fff] shadow-inner">
                     
                      <TouchableOpacity
                        className="w-full bg-[#313131] h-[50px] rounded-[10px] items-center flex-row pl-5 mt-5"
                        onPress={() => deletePostHandler(item._id)}>
                        <Text className="text-[18px] font-[500] text-[#e24848]">
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        )}
      </View>
    </View>
  );
};

export default PostCard;
