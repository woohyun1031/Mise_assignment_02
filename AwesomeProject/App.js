import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';

import Styled from 'styled-components/native';
import CameraRoll from "@react-native-community/cameraroll";



const App = () => {
  const [isState, setIsState] = useState({data:''});
  const checkPlatform = async() => {
    if (Platform.OS === 'android') {
                const result = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                  {
                    title: 'Permission Explanation',
                    message: 'ReactNativeForYou would like to access your photos!',
                  },
                );
                if (result !== 'granted') {
                  console.log('Access to pictures was denied');
                  return;
                }
              }
              CameraRoll.getPhotos({
                  first: 20,
                         assetType: 'Photos',
                       })
                       .then(r => {
                          console.log(r)
                         setIsState({ data: r.edges });
                       })
                       .catch((err) => {
                          //Error Loading Images
                          console.log(err)
                       });
  }

  useEffect(() => {
    checkPlatform();
    }, []);
    const arr = [
    "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d",
    "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d",
    "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d",
    "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d",
    "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d",
    ]

   return (
     <View>
     <FlatList data={isState.data} numColumns={3} renderItem = {({item})=> <Image style={{width:'33%', height:150}} source={{ uri: item.node.image.uri }}/>}/>
     </View>
   );
};

export default App;