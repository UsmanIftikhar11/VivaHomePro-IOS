import React, { Component } from 'react'
import { Text, View,TouchableOpacity,FlatList ,SafeAreaView,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from "../styles";
export default class index extends Component {
    constructor(props){
        super();
        this.state = {
          token:'',
          token_type: '',
  

         leads: [],
          id: ''
        }
      }

      getDATA =() =>{

        AsyncStorage.getItem('setId').then(id =>
          {
            console.log('id', id);
             this.setState({id: id})
      
          })
      
      }

      AllLeads = () =>
      {
        console.log("HAHAHHA", this.state.id);
    
        var formData = new FormData();
        formData.append('pid', parseInt(this.state.id));
        formData.append('tstatus', 'Complete');
        fetch('https://vivahomepros.com/mobile-app/leads4.php', {
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
            console.log(responseData.message);
            this.setState({ leads: responseData.message })
            console.log(this.state.leads);

    
          })
          
      }

      componentDidMount()
      {
    
       this.getDATA();
       setTimeout(()=> {
      this.AllLeads();
       }, 1000 / 2);
        
    
      }



    Test = ({item}) => {
        return (
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Detail")}>
          <View elevation={3} style={styles.listItem}>
       
            {/* <Text style={{alignSelf:'flex-end'}}>2020-09-22</Text> */}
                <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          <View style={{ alignItems: "flex-start", flex: 1, paddingLeft: 20,  }}>
            <Text style={{ fontWeight: "bold" }}>{item.ul_name}</Text>
            <Text style={{ paddingTop: 20}}>{item.tname}</Text>
          </View>
          <Text style={{alignSelf:'flex-start'}}>{item.date}</Text>
         
        </View>
        </TouchableOpacity>
        </View>
        );
      }

    render() {
        return (
            <View>
                 <FlatList
        refreshing={true}
        data={this.state.leads}
        style={{marginTop: 1, marginStart: 1}}
        renderItem={this.Test}
        numColumns={1}
        indicatorStyle={"black"}
        showsVerticalScrollIndicator={true}
        
      />
                                
            </View>
        )
    }
}
