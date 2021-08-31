import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from "./styles";

export default class index extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    title: 'First Item',
                },
                {
                    id: 1,
                    title: 'Second Item',
                },
                {
                    id: 2,
                    title: 'Third Item',
                },
                {
                    id: 3,
                    title: 'Fourth Item',
                },
            ],
        };
    }

    render()
    {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerView}>
                    <View style={styles.headerInnserView}>
                        <View style={styles.leftArrowContainerView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
                                <Image source={require('../../../../assets/leftarrow.png')} style={styles.leftArrowStyle} />
                            </TouchableOpacity >
                            <Text style={styles.replayTemplatesStyle} >Replay Templates</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("New Templates")}>
                            <Image source={require('../../../../assets/plusIcon.png')} style={styles.plusIconStyle} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.mainFlatlistContainer}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <View style={styles.innerFlatListContainer}>
                                <View style={styles.mainTouchableContainer}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Edit Screen")}>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

