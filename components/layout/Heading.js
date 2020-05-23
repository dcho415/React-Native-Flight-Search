import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Heading() {
    return (
        <View style={ styles.headerStyle }>
            <Text h1 style={ styles.text }>Flight Search Engine</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: 'center',
        padding: 20,
    },    
    text: {
        fontSize: '1.5em',
    },
  });
