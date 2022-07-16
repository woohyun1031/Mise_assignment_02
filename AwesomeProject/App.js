import React, { useState, useEffect } from 'react';
import {Alert,View,Text} from 'react-native';

import Styled from 'styled-components/native';

import * as ImagePicker from "react-native-image-picker"
import CameraRoll from "@react-native-community/cameraroll";

const App = () => {
  const [imageSource, setImageSource] = useState();

  useEffect(()=>{
    CameraRoll.getPhotos({
    first: 20,
           assetType: 'Photos',
         })
         .then(r => {
           setImageSource({ photos: r.edges });
         })
         .catch((err) => {
            //Error Loading Images
         });
  },[])

   return (
     <View>
       <ScrollView>
         {this.state.photos.map((p, i) => {
         return (
           <Image
             key={i}
             style={{
               width: 300,
               height: 100,
             }}
             source={{ uri: p.node.image.uri }}
           />
         );
       })}
       </ScrollView>
     </View>
   );
};

export default App;