import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList, Modal } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles";


class index extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      id: '',
      apires: '',
      buildStatus: '',
      imageuri: '',
      dataSource: '',
      modalVisibleStatus: false
    };
  }

  componentDidMount()
  {
    AsyncStorage.getItem('setbbuild').then(bbuild =>
    {
      // console.log('bbuild', bbuild)
      this.setState({ buildStatus: bbuild })
      //console.log(`this.state.buildStatus`, this.state.buildStatus)

    })
    AsyncStorage.getItem('setId').then(id =>
    {
      this.setState({ id: id })
     // console.log(`this.state.id`, this.state.id)

    })

    let items = Array.apply(null, Array(120)).map((v, i) =>
    {
      return {
        id: i,
        src: 'https://unsplash.it/400/400?image=' + (i + 1)
      };
    });
    this.setState({ dataSource: items });

    setTimeout(() => { this.apiCallForImage(); }, 1000 / 2);
  }

  apiCallForImage = async () =>
  {

    var formData = new FormData();
    formData.append('pid', parseInt(this.state.id));
    await fetch('https://vivahomepros.com/mobile-app/gallery.php?apicall=getpics', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },

      body: formData
    })
      .then((Response) => Response.json())
      .then((responseData) =>
      {
        console.log(responseData);
        let data = responseData.images;
        this.setState({ apires: data })
      })
  }
  showModalFunction = (visible, imageURL) =>
  {
    this.setState({ imageuri: imageURL });
    this.setState({ modalVisibleStatus: visible });
  };
  render()
  {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <View style={styles.headerInnserView}>
            <View style={styles.leftArrowContainerView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileTab")}>
                <Image source={require('../../../assets/leftarrow.png')}
                  style={styles.leftArrowStyle} />
              </TouchableOpacity >
              <Text style={styles.replayTemplatesStyle}>Galleries</Text>
            </View>
            {this.state.buildStatus ?
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ImageGallery")}>
                <Image source={require('../../../assets/plusIcon.png')} style={styles.plusIconStyle} />
              </TouchableOpacity>
              : null
            }

          </View>
        </View>
        <View>
          {this.state.buildStatus ?
            <View>
              {this.state.modalVisibleStatus ? (
                <Modal
                  transparent={false}
                  animationType={'fade'}
                  visible={this.state.modalVisibleStatus}
                  onRequestClose={() =>
                  {
                    this.showModalFunction(!this.state.modalVisibleStatus, '');
                  }}>
                  <View style={styles.modelStyle}>
                    <Image
                      style={styles.fullImageStyle}
                      source={{ uri: this.state.imageuri }}
                      resizeMode="contain"
                    />
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.closeButtonStyle}
                      onPress={() =>
                      {
                        this.showModalFunction(!this.state.modalVisibleStatus, '');
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                        }}
                        style={{ width: 35, height: 35 }}
                      />
                    </TouchableOpacity>
                  </View>
                </Modal>
              ) : (
                <View style={styles.container}>
                  <FlatList
                    data={this.state.apires}
                    renderItem={({ item }) => (
                      <View style={styles.imageContainerStyle}>
                        <TouchableOpacity
                          key={item.id}
                          style={{ flex: 1 }}
                          onPress={() =>
                          {
                            this.showModalFunction(true, item.image);
                          }}>
                        
                          <Image
                            style={styles.imageStyle}
                            source={{
                              uri: item.image,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}
            </View>
            :
            <View style={styles.basicProfileContainer}>
              <Text style={styles.basicProfileText}>Galleries do not appear on basic profile</Text>
              <Text style={styles.basicProfileUpgrade}>Upgrade to brand builder</Text>
            </View>
          }
        </View>
      </View>
    );
  }
}

export default index;
