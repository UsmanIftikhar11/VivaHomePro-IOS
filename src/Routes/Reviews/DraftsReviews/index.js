import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>console.log('Drafts')}>
                <Text> Drafts </Text>
                </TouchableOpacity>
                {/* <View>
                    <Text>zia all</Text>
                </View> */}
            </View>
        )
    }
}
