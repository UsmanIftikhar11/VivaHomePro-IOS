import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    chatContainer: {
        flex: 0.9,
    },
    textInputContainer: {
         flex: 0.1,
    },
    textInputView: {
        flexDirection: 'row',
        height:'100%'
    },
    input: {
        height:'100%',
        borderBottomColor: '#000',
        borderBottomWidth:1
    },
    inputContainer: {
        width: '80%',
    },
    buttonContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems:'center',
    },
    messageItem: {
        backgroundColor: 'red',
        marginRight:100
    }
})

export default styles