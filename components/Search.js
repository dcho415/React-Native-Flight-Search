import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Form from './Form';

export default class Search extends Component {
    render() {
        return (
            <View style={ styles.container }>
                {/* <Tabs defaultActiveKey="oneWay" id="uncontrolled-tab-example" onSelect={this.props.onSelect} >
                    <Tab eventKey="oneWay" title="One Way">
                        <Form isReturn = {false} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                    </Tab>
                    <Tab eventKey="return" title="Return">
                        <Form isReturn = {true} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                    </Tab>
                </Tabs> */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.buttons} >
                        <Button title = 'One Way' onPress={() => this.props.onSelect('oneway')} color='grey'/>
                    </View>
                    <View style={styles.buttons} >
                        <Button title = 'Return' onPress={() => this.props.onSelect('return')} color='grey'/>
                    </View>
                </View>
                <Form isReturn = {this.props.isReturn} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                
                {/* <View style={ styles.box }>
                    <Text h5>Refine Flight Search</Text>
                    <FormBoot.Control 
                        name="costMax"
                        type="range" 
                        min="0" 
                        max="5000"
                        onChange={this.props.onChange} 
                        defaultValue="5000"
                    />
                    {"NZD" + this.props.costMax}
                </View> */}
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