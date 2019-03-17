import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class TextOnLine extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horizontalLine}/>
                <View style={styles.orTextContainer}>
                    <Text style={styles.orText}>
                        HOẶC
                    </Text>
                </View>
                <View style={styles.horizontalLine}/>
            </View>
        );
    };

}

const styles = StyleSheet.create({

    container: {
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    orTextContainer: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    orText: {
        fontSize: 11,
        fontWeight: '500',
    },

    horizontalLine: {
        width: '25%',
        borderTopWidth: 2,
        borderColor: '#E0E0E0'
    }
});