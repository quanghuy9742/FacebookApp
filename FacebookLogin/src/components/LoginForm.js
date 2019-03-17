import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import InputForm from "./InputForm";
import FBButton from "./FBButton";
import TextOnLine from "./TextOnLine";

export default class LoginForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <InputForm/>
                <FBButton
                    title='Đăng nhập'
                    titleColor='white'
                    fontWeight='bold'
                    backgroundColor= '#5e80bf'
                />
                <TouchableHighlight style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>
                        Quên mật khẩu?
                    </Text>
                </TouchableHighlight>
                <View style={styles.registerAccountContainer}>
                    <TextOnLine/>
                    <FBButton
                        title='Tạo tài khoản mới'
                        titleColor='#3d5c95'
                        fontWeight='600'
                        backgroundColor= 'white'
                    />
                </View>
            </View>
        );
    };

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 15,
    },

    forgotPasswordContainer: {
        marginTop: 15,
        alignSelf: 'center',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    forgotPasswordText: {
        fontSize: 11, 
        fontWeight: '600',
        color: '#3C5898'
    },

    registerAccountContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

});