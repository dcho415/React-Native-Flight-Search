import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ResultItem extends Component {
    render() {
        return (
            <View style={divStyle}>
                <View>
                    <Text><h2>{this.props.cost}</h2></Text>
                </View>
                <View style={{width: '50%', float: 'left'}}>
                    <Text>{this.props.flightId}</Text>
                    <Text><h5>{this.props.route}</h5></Text>
                    <Text><h6>{this.props.depTime}</h6></Text>
                    <Text><h6>{this.props.arrTime}</h6></Text>
                </View>
                <View style={{width: '50%', float: 'right'}}>
                    <Text>{this.props.retFlightId}</Text>
                    <Text><h5>{this.props.retRoute}</h5></Text>
                    <Text><h6>{this.props.retDepTime}</h6></Text>
                    <Text><h6>{this.props.retArrTime}</h6></Text>
                </View>
                <button style = {{width: '100%'}} className="btn btn-primary">Book Flight</button>
            </View>
        )
    }
}

const divStyle = {
    outline: '1px solid black', 
    height: 'auto', 
    width: '78%', 
    float: 'right', 
    padding: '10px', 
    margin: '1%'
}
