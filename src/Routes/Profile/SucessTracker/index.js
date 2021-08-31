import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			listingVisits: '2',
			connections: '0',
			website: '',
			phone: '',
			PostArray: [],
			data: []

		};
	}


	PostData = () =>
	{
		var formData = new FormData();
		formData.append('pid', 11);
		fetch('https://vivahomepros.com/mobile-app/success-tracker.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},

			body: formData


		})
			.then((Response) => Response.json())
			.then((responseData) =>
			{
				console.log(responseData);
				console.log(responseData.data[0].pageall);
				this.setState({ data: responseData.data[0] })
				console.log(this.state.data.pageall);

			})
			.catch(error => console.log(error))

	}


	componentDidMount()
	{
		this.PostData()
	}


	render()
	{
		return (
			<ScrollView>
				<View style={styles.linecontainer}>
					<View style={styles.lineview} />
					<Text style={styles.lineText}>MONTH-TO-DATE, September</Text>
					<View style={styles.lineview} />
				</View>

				<View style={styles.persentageContainer}>
					<Text style={styles.persentageText}>100%</Text>
				</View>

				<View style={styles.line2Container}>
					<Text style={styles.lineText2}>of your visitor tried to connect with you</Text>
				</View>
				<View style={{ marginTop: 15 }}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Listing Visits</Text>
					<Text>{this.state.data.pageall}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item}>Connections</Text>
					<Text>{this.state.data.connectionsall}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Website</Text>
					<Text>{this.state.data.weball}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Phone</Text>
					<Text>{this.state.data.phoneall}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Total Leads</Text>
					<Text>{this.state.data.totalleadsall}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Profile Leads</Text>
					<Text>{this.state.data.userleadsall}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Homestar leads</Text>
					<Text>{this.state.data.systemleadsall}</Text>
				</View>

				<View style={{ marginTop: 30 }}></View>
				<View style={styles.linecontainer}>
					<View style={styles.lineview} />
					<Text style={styles.lineText}>MONTH-TO-DATE, September</Text>
					<View style={styles.lineview} />
				</View>

				<View style={styles.persentageContainer}>
					<Text style={styles.persentageText}>100%</Text>
				</View>

				<View style={styles.line2Container}>
					<Text style={styles.lineText2}>of your visitor tried to connect with you</Text>
				</View>
				<View style={{ marginTop: 15 }}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Listing Visits</Text>
					<Text>{this.state.data.pageallmonth}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item}>Connections</Text>
					<Text>{this.state.data.connectionsallmonth}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Website</Text>
					<Text>{this.state.data.weballmonth}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Phone</Text>
					<Text>{this.state.data.phoneallmonth}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Total Leads</Text>
					<Text>{this.state.data.totalleadsallmonth}</Text>
				</View>

				<View style={{ marginTop: 15 }}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Profile Leades</Text>
					<Text>{this.state.data.userleadsallmonth}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Homestar leads</Text>
					<Text>{this.state.data.systemleadsallmonth}</Text>
				</View>
				<View style={{ marginTop: 30 }}></View>
			</ScrollView>
		);
	}
}

export default index;