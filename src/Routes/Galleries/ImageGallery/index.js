import React, { Component } from "react";
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class index extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      image:null
    };
  }


 componentDidMount() {
      (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })
 }
 
   
  

    pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
  };

    render()
    {
      return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera" onPress={()=>this.pickImage()} />
      {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
  }
}

export default index;