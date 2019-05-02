import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import resolveAssetSource from 'resolveAssetSource';
import LoginForm from "./LoginForm";

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.imageBackground}
                    source={require('../images/facebook_background.png')}
                    resizeMode='contain'
                />
                <LoginForm
                    style={styles.loginForm}
                />
            </View>    
        )
    };

}

const image = resolveAssetSource(require('../images/facebook_background.png'));
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },

    imageBackground: {
        width: widthScreen,
        height: (widthScreen*image.height)/image.width,
    },

    loginForm: {
        backgroundColor: 'red'
    }

});