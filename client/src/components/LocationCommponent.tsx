import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const LocationCommponent = () => {
    //androidpermissions
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  //androidpermissions
  return (
    <View>
      <MapView
      style={{width:"100%",height:"100%"}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onRegionChange={x=>{
        console.log(x);
        
      }}
      >

      </MapView>
    </View>
  )
}

export default LocationCommponent

const styles = StyleSheet.create({})