//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native';
import {styles} from './style';
import {colors} from '../../styles';
// create a component
class Button extends Component {
    render() {

         const {text,isLoanding,onPress} = this.props
        return (
                <TouchableOpacity 
                style={styles.btn}
                onPress={onPress}
                >
                    {
                        isLoanding?
                        <ActivityIndicator size='large'  color={colors.WHITE}/>
                        :
                        <Text style={styles.textBtn} >
                              {text}
                        </Text>
                    }
                         
                </TouchableOpacity>
        );
    }
}



//make this component available to the app
export default Button;
