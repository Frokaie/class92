import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements" 


export default class LoginScreen extends React.Component{

constructor(){
    super();
    this.state={
        email:"",
        password:""
    }
}

    render()
        {
            return(
                <View style={styles.container}>
                   <Header
                   centerComponent={{text:"Food Recipe's", style:{color:"white", fontSize:60, fontWeight:"bold"}}}
                   ></Header>
                   <TextInput
                   style={styles.inputEmail}
                   placeholder="email-id"
                   onChangeText={(text)=>{
                    this.setState({email:text})
                   }}
                   ></TextInput>

                   <TextInput
                   style={styles.inputPassword}
                   placeholder="password"
                   onChangeText={(text)=>{
                    this.setState({password:text})
                   }}
                   secureTextEntry
                   ></TextInput>
                   <TouchableOpacity></TouchableOpacity>
                 </View>
            )
        }
    
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      
    },
    inputEmail: {
        height: 50,
        width:"30%",
        marginTop:400,
        fontSize:20,
        borderWidth: 3,
    
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
      inputPassword: {
        height: 50,
        width:"30%",
        marginTop:50,
        fontSize:20,
        borderWidth: 3,
    
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
})