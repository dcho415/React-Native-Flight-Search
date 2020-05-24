import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
        successMessage: ''
    }

    componentDidMount = () => {
        var firebaseConfig = {
            apiKey: "AIzaSyDufOzGOMtDEUH4Y3mh4Mee2BT4x4zmokc",
            authDomain: "react-native-flight-search.firebaseapp.com",
            databaseURL: "https://react-native-flight-search.firebaseio.com",
            projectId: "react-native-flight-search",
            storageBucket: "react-native-flight-search.appspot.com",
            messagingSenderId: "473654851032",
            appId: "1:473654851032:web:4cb1c10f4e623ecfecaead",
            measurementId: "G-GF03JCZKY0"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
    }

    createUser = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            this.setState({ errorMessage: '', successMessage: response.user.email + ' created successfully!', email: '', password: ''})
        })
        .catch((error) => {
            this.setState({ errorMessage: error.message, successMessage: '' })
        });
    }

    authUser = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.setState({ errorMessage: '', successMessage: '', email: '', password: ''})
            this.props.navigation.navigate("Home")
        })
        .catch((error) => {
            this.setState({ errorMessage: error.message, successMessage: '' })
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text><h1>Login</h1></Text>
                
                <View style={{ width: '25%'}}>
                    <TextInput
                        placeholder = 'Email'
                        onChangeText = {value => {
                            this.setState({ email: value })
                        }}
                        style = {{ height: '3em', marginBottom: '10px' }}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder = 'Password'
                        secureTextEntry
                        onChangeText = {value => {
                            this.setState({ password: value })
                        }}
                        style = {{ height: '3em', marginBottom: '10px'}}
                        value={this.state.password}
                    />
                    <View style = {{ marginBottom: '10px'}}>
                        <Button
                            title = 'Login'
                            onPress={() => this.authUser()}
                        />
                    </View>                    
                    <Button
                        title = 'Sign Up'
                        onPress={() => this.createUser()}
                    />
                    <Text style={{color:'red'}}>{this.state.errorMessage}</Text>
                    <Text style={{color:'green'}}>{this.state.successMessage}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    margin: {
        marginBottom: '10px'
    }
})