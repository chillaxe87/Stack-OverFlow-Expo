import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { WebView } from 'react-native-webview'

const WebViewScreen = props => {
    return (
        <View style={styles.container}>
            <WebView style={styles.htmlView} source={{ uri: props.address }} />
            <Pressable style={styles.button} title='back' onPress={props.backToMainScreen}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    htmlView: {
        marginTop: 40,
        height: '90%'
    },
    button: {
        backgroundColor: '#504f54',
        color: 'white',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default WebViewScreen