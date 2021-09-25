import React, { Component } from "react";
import { Text, View, ScrollView,Dimensions,Image,TextInput, TouchableOpacity,SafeAreaView,Linking } from "react-native";
import { email } from "react-native-communications";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import Mailer from 'react-native-mail';
import styles from "./styles";


class index extends Component {
  constructor(props) {
    debugger;
    console.log("page called");
    super(props);
    this.state = {
      email: '',
      phone: '',
      title: '',
      base64string: '',
      Picture: null,
      avatarSource: ''
    };
  }

  handleEmail = () => {
    console.log("handle email clicked");
    Linking.openURL('mailto:'+this.state.email+'?subject='+this.state.title+'&body=Description');
    // try{
    //   Mailer.mail({
    //     subject: 'need help',
    //     recipients: ['khabdulmuqeet98@gmail.com'],
    //     ccRecipients: ['khabdulmuqeet98@gmail.com'],
    //     // bccRecipients: ['supportBCC@example.com'],
    //     body: '<b>Testing Email</b>',
    //     // customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
    //     isHTML: true,
    //     attachments: [{
    //       // Specify either `path` or `uri` to indicate where to find the file data.
    //       // The API used to create or locate the file will usually indicate which it returns.
    //       // An absolute path will look like: /cacheDir/photos/some image.jpg
    //       // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
    //       path: '', // The absolute path of the file from which to read data.
    //       uri: '', // The uri of the file from which to read the data.
    //       // Specify either `type` or `mimeType` to indicate the type of data.
    //       type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
    //       mimeType: '', // - use only if you want to use custom type
    //       name: '', // Optional: Custom filename for attachment
    //     }]
    //   }, (error, event) => {
    //     Alert.alert(
    //       error,
    //       event,
    //       [
    //         {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
    //         {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    //       ],
    //       { cancelable: true }
    //     )
    //   });
    // }
    // catch (e) {
    //   console.log(e);
    // }
    
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.mainContainer}>
         <Text style={{ paddingLeft: 15, color: 'gray' }}>CLIENT CONTACT INFORMATION</Text>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Phone</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              onChangeText={(phone) => this.setState({phone})}
              value={this.state.phone}
               placeholder="(123) 456-7890"
               />
            </View>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Email</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              placeholder="abc@gmail.com"
               />
            </View>

            <Text style={{alignSelf:'center', paddingTop:10, color:"#0693e3" }}>IMPORT CONTACT INFO</Text>
            <Text style={{ paddingLeft: 15, color: 'gray' ,paddingTop: 15}}>JOB DETAILS</Text>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Title</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              value={this.state.title}
              onChangeText={(title) => this.setState({title})}
              placeholder="Hello Testing"
               />
            </View>

            <View style={styles.bottomView}>
              <TouchableOpacity>
              <Image source={require('../../../assets/camera.png')} style={{height: 30, width: 30}}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => this.handleEmail()} >
                <Text style={{alignSelf:'center'}}>Send</Text>
              </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView> 
      </ScrollView>
    );
  }
}

export default index;