//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

// create a component
class HomeScreen extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btn}>
                                
            <Text style={styles.textBtn}>
                    S'inscrire


            </Text>

    </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeScreen   ;
