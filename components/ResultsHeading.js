import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ResultsHeading extends Component {

    render() {
        return (
            <View style={{width: '80%', float: 'right', padding: '10px'}}>
                    <View style={{width:'80%', float: 'left'}}>
                        <Text><h1>{this.props.route}</h1></Text>
                    </View>
                    <View style={{width: '20%', float: 'right', textAlign: 'center'}}>
                        <Text>{this.props.depDate}</Text>
                        <br/>
                        <Text>{this.props.retDate}</Text>
                    </View>
            </View>
        )
    }
}
