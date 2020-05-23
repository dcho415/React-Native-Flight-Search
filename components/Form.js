import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class Form extends Component {

    isOneWay = (isReturn) => {
        if (isReturn) {
            return (
                <View>
                    <Text>Return Date: </Text>
                    <input 
                        type="date"
                        name="retDate"
                        className="form-control"
                        onChange={this.props.onChange}    
                        required   
                    />
                </View>
            );
        } else {
            return;
        }
    }

    render() {
        return (
            <form id='myForm' > 
                    <View>
                        <input 
                            type="text" 
                            name="origin"
                            placeholder="Enter Origin City"
                            className="form-control"
                            onChange={(value) => this.props.onChange('origin', value.currentTarget.value)} 
                            required
                        />
                    </View>
                    <View>
                        <input 
                            type="text"
                            name="dest"
                            placeholder="Enter Destination City"
                            className="form-control"
                            onChange={(value) => this.props.onChange('dest', value.currentTarget.value)} 
                            required
                        />
                    </View>
                    <View>
                        <Text>Departure Date: </Text>
                        <input 
                            type="date"
                            name="depDate"
                            className="form-control"  
                            onChange={(value) => this.props.onChange('depDate', value.currentTarget.value)}
                            required
                        />
                    </View>
                    { this.isOneWay(this.props.isReturn) }
                    <View>
                        <Text>Passengers: </Text>
                        <input
                            type="number"
                            name="passengers"
                            className="form-control"
                            onChange={(value) => this.props.onChange('passengers', value.currentTarget.value)}
                            min='1'
                            defaultValue='1'
                            required
                        />
                    </View>
                    <br/>
                    <Button title="Submit" onPress={() => this.props.onSubmit()}/>
                </form>
        )
    }
}

export default Form
