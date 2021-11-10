import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleContainer = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find Stack Overflow User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00003f'
    }
})
export default TitleContainer