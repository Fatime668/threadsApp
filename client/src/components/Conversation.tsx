import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUser } from '../api/UserRequests'
import { useDispatch, useSelector } from 'react-redux'

const Conversation = ({data,curentUserId}:any) => {
    // const [userData,setUserData] = useState(null)
    // useEffect(() => {
    //     const userId = data.members.find((id:any)=>id!==curentUserId)
        
    //   const getUserData = async()=>{
    //     try{
    //         const {data} = await getUser(userId)
    //         setUserData(data)
    //         console.log(data);
    //     }catch(error){
    //         console.log(error);
    //     }
    //   }
    //   getUserData()
    // }, [])
    
  return (
    <View>
      <Text>Follower</Text>
     <View>
        <Text></Text>
     </View>

    </View>
  )
}

export default Conversation

const styles = StyleSheet.create({})