import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerView: {
        height: Height*0.1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
    },
    headerInnserView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Width*0.05,
        alignContent: 'space-between',
       
    },
    leftArrowContainerView: {
        flexDirection: 'row',
        justifyContent: 'center',
       
    },
    leftArrowStyle: {
        width: Width*0.05,
        height: Height * 0.04,
        tintColor:'#29b6f6'
    
        
    },
    replayTemplatesStyle: {
        fontSize: 18,
        marginLeft:Width*0.05
    },
    plusIconStyle: {
        width: 20,
        height: 20,
        tintColor:'#29b6f6'
    },
    basicProfileContainer: {
        backgroundColor: '#e0e0e0',
        height: 60,
        justifyContent: "center",
    },
    basicProfileText: {
        textAlign: "center",
        fontSize:16
    },
    basicProfileUpgrade: {
        textAlign: "center",
        fontSize:14
    },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});

export default styles;
