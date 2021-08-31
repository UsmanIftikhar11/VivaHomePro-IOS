import styles from "./styles";
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'


export default class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			checkbox: true,
			data: [
				{
					id: 0,
					title: 'First Item',
				},
				{
					id: 1,
					title: 'Second Item',
				},
			],
		};
	}
	manageCheckboxVisible = (index) => 
	{
		let selectedIndex = index
		console.log('index',selectedIndex);
		this.setState({ checkbox: !this.state.checkbox})
	}
	render()
	{
		return (
			<View style={styles.mainFlatlistContainer}>
				<View style={styles.textAndButtonContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.textStyle}>Appliance Repair</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Text style={styles.removeButtonStyle}>REMOVE</Text>
					</View>
				</View>
				<FlatList
					data={this.state.data}
					renderItem={({ item, index }) => (
						<View style={styles.innerFlatListContainer}>
							<View style={styles.checkBoxContainer}>
								<TouchableOpacity onPress={()=>this.manageCheckboxVisible(index)}>
									<Image
										style={styles.checkboxStyle}
										source={
											this.state.checkbox
												? require("../../../../../assets/checkbox_border.png")
												: require('../../../../../assets/checkbox.png')
										}
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.mainTouchableContainer}>

								<TouchableOpacity>
									<Text style={styles.mainTouchableTextContainer}>{item.title}</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>
				<View style={styles.categoryButtonContainer}>
					<Text style={styles.addCategoryStyle}>ADD CATEGORY</Text>
					<View style={styles.addMoreCategoriesContainer}>
						<Text style={styles.addMoreCategoriesText}>You cannot add any more categories</Text>
						<Text style={styles.addMoreCategoriesInnerText}>Is there something your company does that you dont see a task for</Text>
						<Text style={styles.addMoreCategoriesRequestTask}>Request task to be added</Text>
					</View>
				</View>
			</View>
		)
	}
}

