import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    linecontainer:{
        flexDirection: 'row', 
        marginTop:17
    },
	lineview: {
         backgroundColor: 'black', 
         height: Height* 0.001, 
         flex: 1, 
         alignSelf: 'center' 
        },

	lineText: {
		alignSelf: 'center',
		paddingHorizontal: 5,
		fontSize: RFValue(17)
	},

    persentageContainer:{
        marginTop: 15,
        borderColor:"red",
      
    },

    persentageText:{
        fontSize: RFValue(55), 
        alignSelf:'center',
        color:'green'
    },
    
    line2Container:{
        marginTop: 15,
        borderColor:"red",
  
    },
    lineText2: {
		alignSelf: 'center',
		paddingHorizontal: 5,
		fontSize: RFValue(15),
        color:'gray'
	},

    container: {
        
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignSelf:'center'
      },
      item: {
         width: Width * 0.55,
      
      },

      container2: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignSelf:'center'
      },
      item2: {
         width: Width * 0.55,
      
         color:'gray'

      }
    
});

export default styles;
