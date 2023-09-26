import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostDetailsCard from '../components/PostDetailsCard';
import {useSelector} from 'react-redux';
import ArrowSvg from '../assets/svg/ArrowSvg'
type Props = {
  navigation: any;
  route: any;
};

const PostDetailsScreen = ({navigation, route}: Props) => {
  let item = route.params.data;
  const {posts} = useSelector((state: any) => state.post);
  const [data, setdata] = useState(item);

  useEffect(() => {
    if (posts) {
      const d = posts.find((i: any) => i._id === item._id);
      setdata(d);
    }
  }, [posts]);

  return (
    <SafeAreaView style={{backgroundColor:"#0d0d0d",flex:1}}>
      <View className="relative flex-col justify-between" >
        <View className="h-[102%]">
          <View className="px-3 py-1">
            <TouchableOpacity onPress={() => navigation.goBack()}>
             <ArrowSvg/>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PostDetailsCard
              navigation={navigation}
              item={data}
              postId={data._id}
            />
            <View>
              {data?.replies?.map((i: any, index: number) => {
                return (
                  <PostDetailsCard
                    navigation={navigation}
                    item={i}
                    key={index}
                    isReply={true}
                    postId={item._id}
                  />
                );
              })}
              <View className="mb-[150px]"></View>
            </View>
          </ScrollView>
        </View>
        <View className="absolute bottom-0 flex-row w-full justify-center h-[70px] items-center" style={{backgroundColor:"#1a1a1a"}}>
          <TouchableOpacity
            className="w-[92%] bg-[#2f2f2f] h-[45px] rounded-[40px] flex-row items-center"
            onPress={() =>
              navigation.replace('CreateReplies', {
                item: item,
                navigation: navigation,
              })
            }>
            <Image
              source={{uri: item.user.avatar.url}}
              width={30}
              height={30}
              borderRadius={100}
              className="ml-3 mr-3"
            />
            <Text className="text-[16px] text-[#fff]">
              Reply to {item.user.name}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostDetailsScreen;
