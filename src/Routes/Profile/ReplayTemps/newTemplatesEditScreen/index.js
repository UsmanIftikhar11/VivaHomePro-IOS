import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image ,TextInput} from 'react-native'
import styles from "./styles";

export default class index extends Component {
    render() {
        return (
           <View style={styles.mainContainer}>
                <View style={styles.headerView}>
                    <View style={styles.headerInnserView}>
                        <View style={styles.leftArrowContainerView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ReplayTemps")}>
                                <Image source={require('../../../../../assets/crossIcons.png')} style={styles.leftArrowStyle} />
                            </TouchableOpacity >
                            <Text style={styles.replayTemplatesStyle} >New Template</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("New Templates")}>
                            <Image source={require('../../../../../assets/deleteIcon.png')} style={styles.plusIconStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
                 <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Title"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        onChangeText={title => this.setState({ title })}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter template body here"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        multiline={true}
                        onChangeText={title => this.setState({ title })}
                    />
                </View>

                <View style={styles.submitButtonContainer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => alert('hi click')
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
