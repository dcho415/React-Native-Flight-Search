import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import { Slider } from 'react-native-community';
import Form from './Form';

export default class Search extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.buttons} >
                        <Button title = 'One Way' onPress={() => this.props.onSelect('oneway')} color='grey'/>
                    </View>
                    <View style={styles.buttons} >
                        <Button title = 'Return' onPress={() => this.props.onSelect('return')} color='grey'/>
                    </View>
                </View>
                <Form isReturn = {this.props.isReturn} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                
                <View style={ styles.box }>
                    <Text><h4>Refine Flight Search</h4></Text>
                    {/* <Slider 
                        minimumValue={0}
                        maximumValue={5000}
                        onValueChange={(value) => this.props.onChange(costMax, value)} 
                        value={5000}
                    /> */}
                    <Text>{"NZD" + this.props.costMax}</Text>
                </View>
            </View>               
        )
    }
}

const styles = StyleSheet.create({
    container: {
      width: '20%',
      backgroundColor: 'grey',    
    },
    box: {
      padding: 20
    },
    buttons: {
        width: '50%',
        borderRadius: 0,
    },
  });