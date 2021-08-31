import React, { Component } from 'react'
import { SafeAreaView,Text, TextInput, View,FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'

export default class index extends Component
{
  state = {
    text: '',
    getmessage: '',
    setmessage: '',
    fileimage:'',
  }
  componentDidMount()
  {
    console.log(`this.state.fileimage`, this.state.fileimage)
    async () =>
    {
      if (Platform.OS !== 'web')
      {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted')
        {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
    this.loadMessages();
  }
  

  pickImage = async () =>
  {
      console.log('pick')
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ fileimage: result.uri });
    }
  };
 
  
   loadMessages = () =>
  {
    var formData = new FormData();
    formData.append('leadid', '639263331');
    formData.append('uid', '627470772');
    formData.append('pid', '11');
   
    fetch('https://vivahomepros.com/mobile-app/chat.php?chatcall=getmsg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },

      body: formData

    })
      .then((Response) => Response.json())
      .then((res) =>this.setState({getmessage:res.images}))
      
   
  }
  sendMessages = () =>
  {
    console.log('testing');
    var formData = new FormData();
    formData.append('leadid', '639263331');
    formData.append('uid', '627470772');
    formData.append('pid', '11');
    formData.append('message', 'zia');
    formData.append('whosend', 'zia');
    formData.append('attachment', this.state.fileimage);
    
    fetch('https://vivahomepros.com/mobile-app/chat.php?chatcall=uploadmsg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },

      body: formData

    })
      .then((Response) => Response.json())
      .then((res) =>console.log(res))
      
   
  }
  render()
  {
    console.log(`this.state.setmessage`, this.state.setmessage)
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.chatContainer}>
          <FlatList
          data={this.state.getmessage}
          renderItem={({item, index}) => (
            <View style={styles.messageItem}>
              <Text style={styles.title}>{item.message}</Text>
            </View>
          )}
        />
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.textInputView}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={this.state.text}
              />

            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={()=>this.sendMessages()}>
                <Text>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.pickImage()}>
                <Text>camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
