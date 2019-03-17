import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class FBButton extends Component {

    render() {
        return (
            <View style={[styles.container, {
                    backgroundColor: this.props.backgroundColor
                }]}>
                <Text style={[styles.title, {
                    color: this.props.titleColor,
                    fontWeight: this.props.fontWeight
                }]}>
                    {this.props.title}
                </Text>
            </View>
        );
    };

}


const styles = StyleSheet.create({

    container: {
        height: 39,
        marginTop: 15,
        marginLeft: 15, 
        marginRight: 15,
        flexDirection: 'row',
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#3C5898',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 14,
    }

});