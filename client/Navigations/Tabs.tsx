import {Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import SearchScreen from '../src/screens/SearchScreen';
import PostScreen from '../src/screens/PostScreen';
import NotificationScreen from '../src/screens/NotificationScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import {getAllPosts} from '../redux/actions/postAction';
import {useDispatch} from 'react-redux';
import {loadUser} from '../redux/actions/userAction';
import HomeSvg from '../src/assets/svg/HomeSvg'
import SearchSvg from '../src/assets/svg/SearchSvg'
import PostSvg from '../src/assets/svg/PostSvg'
import LikeSvg from '../src/assets/svg/LikeSvg'
import ProfileSvg from '../src/assets/svg/ProfileSvg'
import { border } from 'native-base/lib/typescript/theme/styled-system';

type Props = {};

const Tab = createBottomTabNavigator();

const Tabs = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          backgroundColor:"#0d0d0d",
          borderTopWidth:0
          
        }
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <HomeSvg stroke={focused ? '#fff' : 'gray'} fill={focused ? '#fff' : 'none'}/>
          ),
        })}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <SearchSvg  stroke={focused ? '#fff' : '#B8B8B8'}/>
          ),
        })}
      />

      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={({route}) => ({
          tabBarStyle: {display: route.name === 'Post' ? 'none' : 'flex'},
          tabBarIcon: ({focused}) => (
           <PostSvg stroke={focused ? '#fff' : '#B8B8B8'}/>
          ),
        })}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <LikeSvg stroke={focused ? '#fff' : '#B8B8B8'}/>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
          <ProfileSvg stroke={focused ? '#fff' : '#B8B8B8'}/>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
