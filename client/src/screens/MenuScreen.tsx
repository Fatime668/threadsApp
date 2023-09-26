import {StyleSheet, Text, TouchableOpacity,FlatList,Modal, View, Pressable} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowSvg from '../assets/svg/ArrowSvg';
import UserPlus from '../assets/svg/UserPlus';
import Notification from '../assets/svg/Notifation';
import LockSvg from '../assets/svg/LockSvg';
import AccountSvg from '../assets/svg/AccountSvg';
import LanguageSvg from '../assets/svg/LanguageSvg';
import HelpSvg from '../assets/svg/HelpSvg';
import AboutSvg from '../assets/svg/AboutSvg';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userAction';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from '../../services/i18next';
import languagesList from "../../services/languagesList.json"

const MenuScreen = ({navigation}:any) => {
  const [visible,setVisible] = useState<any>(false)
  const {t} = useTranslation()
    const dispatch = useDispatch();
    const logoutHandler = async () => {
      logoutUser()(dispatch);
    };
    const changeLng = (lng:any)=>{
      i18next.changeLanguage(lng)
      setVisible(false)
    }
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#0d0d0d"}}>
      <Modal visible={visible} onRequestClose={()=>setVisible(false)} animationType="slide">
          <View style={styles.languagesList}>
          <Pressable
              style={{alignItems:'center'}}
              onPress={() => setVisible(!visible)}>
              <Text style={styles.textStyle}></Text>
            </Pressable>
            <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item})=>( 
              <TouchableOpacity style={styles.languageButton} onPress={()=>changeLng(item)}>
              <Text style={styles.lngName}>{languagesList[item].nativeName}</Text>
            </TouchableOpacity>
            )}
            />
            
          </View>
         
      </Modal>
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection:'row',
          paddingLeft:20
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.goBack()}>
            <ArrowSvg />
          <Text style={{fontSize: 16,color:"#fff"}}>{t('back')}</Text>

          </TouchableOpacity>
        <Text style={{fontSize:18,marginRight:20,color:"#fff"}}>{t('setting')}</Text>
      </View>
      <View style={{gap:10,marginLeft:10,marginTop:20}}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><UserPlus/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('Follow friends')}</Text></TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><Notification/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('notification')}</Text></TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><LockSvg/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('privacy')}</Text></TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><AccountSvg/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('account')}</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setVisible(true)} style={{flexDirection:'row',alignItems:'center'}}><LanguageSvg/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('language')}</Text></TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><HelpSvg/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('help')}</Text></TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}><AboutSvg/><Text style={{marginLeft:10,fontSize:16,color:"#fff"}}>{t('about')}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10,marginTop:5}} onPress={logoutHandler}>
            <Text style={{fontSize:16,color:"#fff"}}>
                {t('logout')}
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  languagesList: {
    flex: 1,
    marginTop:90,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    justifyContent: 'center',
    padding: 10,
    backgroundColor:"#0d0d0d"
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
  textStyle:{
    width: 80,
    marginBottom:50,
    height:3,
    backgroundColor:"#fff"
  }
});
