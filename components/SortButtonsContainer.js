import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const SortButtonsContainer = props => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={props.onPressSortByDate}><Text>sort by date</Text></Pressable>
            <Pressable style={styles.button} onPress={props.onPressSortByViews}><Text>sort by views</Text></Pressable>
            <Pressable style={styles.button} onPress={props.onPressSortByReplays}><Text>sort by reply</Text></Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
    }
})

export default SortButtonsContainer