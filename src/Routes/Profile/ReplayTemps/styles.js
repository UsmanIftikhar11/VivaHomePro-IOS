import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
     //////////Replay temlates HeaderStyle ///////////////////////
    mainContainer: {
        flex: 1,
    },
    headerView: {
        height: windowHeight * 0.1,
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
        width: windowWidth * 0.05,
        height: windowHeight * 0.04, 
    },
    replayTemplatesStyle: {
        fontSize: 18,
        marginLeft:windowWidth*0.05
    },
    plusIconStyle: {
        width: windowWidth * 0.06,
        height: windowHeight * 0.03,
        marginTop:windowHeight*0.009
    },


    //////////Replay temlates flatList ///////////////////////
    mainFlatlistContainer: {
        flex: 1,
        borderWidth: 2,
    },
    innerFlatListContainer: {
        flex:1,
        
    },
    mainTouchableContainer: {
        flex: 1,
       height: windowHeight * 0.1,
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 0.2,
        backgroundColor: '#fafafa',
        borderRadius: 2,
        marginVertical:5
    }

})

export default styles;