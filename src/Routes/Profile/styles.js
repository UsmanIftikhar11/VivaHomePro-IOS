import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'red',
  },

  TopView: {
    height: Height * 0.3,
    width: Width,
    backgroundColor: '#000000a0',
    justifyContent: 'flex-end'
  },

  buttonView: {
    backgroundColor: '#9aed9a',
    borderBottomColor: 'gray',
    width: Width,
    height: Height * 0.06,
    borderWidth: 0.5,
    justifyContent: 'center',
  },

  buttonView2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    width: Width,
    height: Height * 0.07,
    borderTopColor: 0,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

  buttonViewlogout: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    width: Width,
    height: Height * 0.07,
    borderTopColor: 0,
    borderWidth: 0.5,
  },

  ButtonText: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'

  }
  ,
  ButtonTextTouch: {
    marginTop: Height * 0.02,
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginTop: Height * 0.02
  },
  ButtonTextTouchLogout: {
    marginTop: Height * 0.02,
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginTop: Height * 0.02,
    alignSelf: 'center',
    color: 'red'
  },
  ButtonIcon: {
    height: 15,
    width: 15,
    marginTop: 10
  },
  text: {
    color: "white",
    fontSize: RFValue(28),
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  percentageContainer: {
    height: 50,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#424242',
    flexDirection:'row'
  },
  starContainer: {
    width:30

  },
  starImage: {
    width: 20,
    height: 20,
   tintColor:'yellow'
  },
  percentage: {
    marginLeft:5,
      width: 10,
    height: 10,
   tintColor:'#fff'
  }

});

export default styles;
