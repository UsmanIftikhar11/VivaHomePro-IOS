import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';
export default class index extends Component {

    constructor(props){
        super();
        this.state = {
            data: [],
            postalcode: '',
            projecttype: '',
            appropriatestatus: '',
            applianceneeds: '',
            powersource: '',
            needsrepair: '',
            requestcompleted: '',
            location: '',
            businesshours: '',
            anythingelse: '',
            Name: '',
            phone: '',
            email: '',
            address:''
        }
      }

      AllService = () =>
      {
  
    
        var formData = new FormData();
        formData.append('leadid', '967817092');
       
        fetch('https://vivahomepros.com/mobile-app/service-request-detail.php', {
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
           this.setState({data: responseData.srdetails})
             // console.log("this.this.state.data", this.state.data);
              let postalcode= this.state.data[0].ques;
              this.setState({ postalcode: postalcode });
              let applianceneeds = this.state.data[1].ques;
              this.setState({applianceneeds:applianceneeds})
              let appropriatestatus = this.state.data[2].ques;
              this.setState({appropriatestatus:appropriatestatus})
              let needsrepair = this.state.data[3].ques;
              this.setState({needsrepair:needsrepair})
              let powersource = this.state.data[4].ques;
              this.setState({powersource:powersource})
              let requestcompleted = this.state.data[5].ques;
              this.setState({requestcompleted:requestcompleted})
              let location  = this.state.data[6].ques;
              this.setState({location :location })
              let businesshours  = this.state.data[7].ques;
              this.setState({businesshours :businesshours })
              let anythingelse  = this.state.data[8].ques;
              this.setState({anythingelse :anythingelse })
              let Name  = this.state.data[9].ques;
              this.setState({Name :Name })
              let phone  = this.state.data[10].ques;
              this.setState({phone :phone })
              let email  = this.state.data[11].ques;
              this.setState({email :email })
              let address  = this.state.data[11].ques;
              this.setState({address :address })
          })
          
      }

      componentDidMount(){
          this.AllService();
      }

	render() {
		return (
			<ScrollView style={styles.maincontainer}>
				<View >
					<Text style={styles.text1}>Are you intrested in this Service Request?</Text>
				</View>

				<View style={{flexDirection:'row',}}>
                    <View>
                       <TouchableOpacity style={styles.ButtonStyle} >
                           <Text  style={styles.text3}>Yes</Text>
                       </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.ButtonStyle2} >
                           <Text style={styles.text3}>No</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.postalcode.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.postalcode.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.applianceneeds.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.applianceneeds.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.appropriatestatus.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.appropriatestatus.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.needsrepair.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.needsrepair.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.powersource.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.powersource.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.requestcompleted.split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.requestcompleted.split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.location .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.location .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.businesshours .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.businesshours .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.anythingelse .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.anythingelse .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.Name .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.Name .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.phone .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.phone .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.email .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.email .split('nextline')[1]}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text1}>{this.state.address .split('nextline')[0].trim()}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>{this.state.address .split('nextline')[1]}</Text>
                    </View>
                </View>
			</ScrollView>
		);
	}
}
