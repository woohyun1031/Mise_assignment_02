import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
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
          });
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
          return;
      }
    }
    try{
      const isPhotoList = await
        CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        })
      console.log(isPhotoList);
      setIsState({data: isPhotoList.edges});
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkPlatform();
  }, [])

   return (
     <View>
       <FlatList
         data={isState.data}
         numColumns={3}
         renderItem = {
           ({item}) =>
             <Image
               style= {{width:'33%', height:150}}
               source={{ uri: item.node.image.uri }}/>
         }/>
     </View>
   );
};

export default App;