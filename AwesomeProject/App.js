import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import Styled from 'styled-components/native';
import CameraRoll from "@react-native-community/cameraroll";


const App = () => {
  const [isState, setIsState] = useState();
  useEffect(() => {
    CameraRoll.getPhotos({
    first: 20,
           assetType: 'Photos',
         })
         .then(r => {
            console.log(r)
           setIsState({ photos: r.edges });
         })
         .catch((err) => {
            //Error Loading Images
         });
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
     <Text>시발</Text>
     <FlatList data={arr} renderItem = {({item})=> <Image style={{width:100, height:100}} source={{uri:item}}/>}/>
     </View>
   );
};

export default App;