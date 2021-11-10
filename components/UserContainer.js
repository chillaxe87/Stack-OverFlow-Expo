import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const UserContainer = props => {
    return (
        <View style={styles.userContainer}>
            <View>
                <Image
                    fadeDuration={300}
                    source={{ uri: props.user.profile_image }}
                    resizeMode='cover'
                    style={styles.avatar} />
            </View>
            <View >
                <Text style={styles.infoText}>{props.user.display_name}</Text>
                <Text style={styles.infoText}>Reputation: {props.user.reputation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20
    },
    infoText: {
        color: '#00003f',
        marginVertical: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default UserContainer