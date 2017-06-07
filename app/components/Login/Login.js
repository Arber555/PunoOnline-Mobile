import React, {Component} from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/logo.png')} />
                        
                        <Text style={styles.title}>PunoOnline nga kudo!!!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height:100
    },

    title: {
        color: '#FFF',
        marginTop: 1,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});