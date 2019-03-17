import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class InputForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.emailInputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email hoặc số điện thoại"
                        placeholderTextColor={borderColor}
                    />
                </View>
                <View style={styles.passwordInputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Mật khẩu"
                        placeholderTextColor={borderColor}
                    />
                </View>
            </View>
        );
    };

}

const borderColor = "#adaeb1";
const borderWidth = 0.5;
const paddingLeft = paddingRight = 15;
const marginTop = 37;
const cornerRadius = 3;

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 78,
        flexDirection: 'column',
        marginTop: marginTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight
    },

    emailInputView: {
        flex: 1,
        paddingLeft: paddingLeft,
        borderWidth: borderWidth,
        borderBottomWidth: 0,
        borderColor: borderColor,
        borderTopLeftRadius: cornerRadius,
        borderTopRightRadius: cornerRadius,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textInput: {
        width: '100%',
        fontSize: 14.5,
    },

    passwordInputView: {
        flex: 1,
        paddingLeft: paddingLeft,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderBottomLeftRadius: cornerRadius,
        borderBottomRightRadius: cornerRadius,
        flexDirection: 'row',
        alignItems: 'center',
    },

});