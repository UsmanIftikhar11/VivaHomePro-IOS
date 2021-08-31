import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>console.log('Published')}>
                <Text> Published </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
