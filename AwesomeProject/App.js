import React, { useState, useEffect } from 'react';
import {Alert,View,Text} from 'react-native';

import Styled from 'styled-components/native';

import * as ImagePicker from "react-native-image-picker"
import CameraRoll from "@react-native-community/cameraroll";

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Photo = Styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const ImagePickerButton = Styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  border-color: #CCCCCC;
  padding: 8px 32px;
  margin-top: 16px;
`;
const Label = Styled.Text``;

const App = () => {
  const [imageSource, setImageSource] = useState();

  useEffect(()=>{

  },[])

  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const showCameraRoll = ()=> {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      }
      else {
        setImageSource(response.uri);
      }
    });
  };

  return (
    <Container>
      {imageSource && <Photo source={{uri: imageSource}}/>}
      <ImagePickerButton onPress={showCameraRoll}>
        <Label>
            <Text>
                Show Camera Roll
            </Text>
        </Label>
      </ImagePickerButton>
    </Container>
  );
};

export default App;