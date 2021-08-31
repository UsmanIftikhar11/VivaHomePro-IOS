import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
   maincontainer:{
       flex:1
   },
   text1:{
       paddingTop: 10,
     fontSize: RFValue(16),
     paddingLeft: 15
   },
   text2:{
    paddingTop: 10,
  fontSize: RFValue(16),
  paddingLeft: 15

},
text3:{
    color:'white',
    fontSize: RFValue(14)
},
text4:{
    color:'gray',
    fontSize: RFValue(16)
},

ButtonStyle:{
    marginTop: 10,
    marginLeft:15,
   
    width: Width* 0.2,
    height: Height* 0.04,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1273de',
    borderRadius:20
},


ButtonStyle2:{
    marginTop: 10,
    marginLeft:15,
   
    width: Width* 0.2,
    height: Height* 0.04,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    borderRadius:20
},

TextContainer:{
    paddingLeft: 15,
    paddingTop:10
}


});

export default styles;
