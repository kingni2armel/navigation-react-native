//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import Button from '../../components/Button';
import  {colors} from '../../styles'




import { styles } from './style';
// create a component
class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.title}>Inscription</Text>
                            <TextInput
                                    placeholder='Nom'
                                    style={styles.input}
                                
                                />
                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                        
                        />
                        <TextInput
                            placeholder='Mot de passe'
                            secureTextEntry={true}
                            style={styles.input}
                    
                        />
                        <Button text="Inscription"/>
            
                        <Text style={styles.haveAccount}
                            onPress={()=>this.props.navigation.navigate("Login")} 

                        >
                            Vous avez un compte?
                        </Text>

            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default RegisterScreen;
