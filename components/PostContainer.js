import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const PostContainer = (props) => {

    const userPosts = props.userPosts;

    const renderListItem = (item) => {
        const date = new Date(item.item.creation_date * 1000)
        const displayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        return (
            <View style={styles.item}>
                <Pressable onPress={() => props.getPost(item.item.link, item.item.owner.user_id)}>
                    <Text style={styles.date}> Posted on: {displayDate}</Text>
                    <Text style={styles.topic}>Topic: {item.item.title}</Text>
                    <View style={styles.viewsDetails}>
                        <Text style={styles.views}>views: {item.item.view_count} </Text>
                        <Text style={styles.views}>answers: {item.item.answer_count}</Text>
                    </View>
                </Pressable>
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <FlatList
                data={userPosts}
                keyExtractor={(post) => post.question_id}
                renderItem={renderListItem.bind(this)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginVertical: 20
    },
    item: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white'
    },
    date: {
        alignSelf: 'center',
        color: '#00003f',
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 5
    },
    viewsDetails: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 5
    },
    topic: {
        color: '#00003f',
        marginHorizontal: 2,
        fontSize: 14
    },
    views: {
        color: '#00003f',
        fontSize: 13,
        fontWeight: '700'
    }
})
export default PostContainer