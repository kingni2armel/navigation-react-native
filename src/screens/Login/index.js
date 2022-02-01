//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import  {colors} from '../../styles'
import Button from '../../components/Button';
import {auth} from '../../api/auth';


import { styles } from './style';

// create a component
class LoginScreen extends Component {


    state = {
        email:'',
        password:'',
        isLoanding:false,
        error:''
    }
    login = async ()=>{
       this.setState({isLoanding:true})
        const data = {
            email:this.state.email,
            password:this.state.password
        }
        try{
            const response= await auth (data)
            console.log('response',response)
            this.setState({isLoanding:false})
              if(response.status==400){
                  this.setState({error:'Email ou mot de passe incorrect'})
              }
        } catch(e){
            this.setState({error:'error'})
        }

    }
    
    render() {
        return (
            <View style={styles.container}>
                
                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                            onChangeText={(value)=>this.setState({email:value})}
                        
                        />
                        <TextInput
                            placeholder='Mot de passe'
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={(value)=>this.setState({password:value})}
                        
                        />
                        {this.state.error != ''? 
                        <Text>{this.state.error}</Text> :null   
                    }
                        <Button 
                        text="Connexion"
                        isLoanding ={this.state.isLoanding}
                        onPress={this.login}
                         
                         
                         />
                        <Text style={styles.haveAccount}
                            onPress={()=>this.props.navigation.navigate("Register")} 

                        >
                             Vous n'avez pas de compte?
                        </Text>



            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default LoginScreen;
