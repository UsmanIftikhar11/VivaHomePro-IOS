import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
     //////////Replay temlates HeaderStyle ///////////////////////
    mainContainer: {
        flex: 1,
    },
    headerView: {
        height: windowHeight*0.1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
    },
    headerInnserView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth*0.05,
        alignContent: 'space-between',
       
    },
    leftArrowContainerView: {
        flexDirection: 'row',
        justifyContent: 'center',
       
    },
    leftArrowStyle: {
        width: windowWidth*0.05,
        height: windowHeight * 0.04,
    
        
    },
    replayTemplatesStyle: {
        fontSize: 18,
        marginLeft:windowWidth*0.05
    },
    plusIconStyle: {
        width: windowWidth * 0.04,
        height: windowHeight * 0.03,
        marginTop:windowHeight*0.009
    },
      input: {
        margin: 15,
        height: 40,
        backgroundColor: '#fafafa',
        height: 60
    },
    submitButton: {
        height: 60,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
       
    },
    submitButtonText: {
        color: '#000',
        alignSelf: 'center', 
       
        
    },
    submitButtonContainer: {
        marginTop: 250,
        alignSelf: 'flex-end',
         backgroundColor: '#0091ea',
        borderRadius: 10,
        marginRight:5
         
         

        
    }


})

export default styles;