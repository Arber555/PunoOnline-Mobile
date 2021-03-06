import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';


export default class PunoOnline extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Username"
                placeholderTextColor = "rgba(255,255,255,0.5)"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor = "rgba(255,255,255,0.5)"
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#FF6347',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});