import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, TextInput, Button } from "react-native";

import TitleContainer from "../components/TitleContainer";
import UserContainer from "../components/UserContainer";
import PostContainer from "../components/PostContainer"
import SortButtonsContainer from "../components/SortButtonsContainer";
import { getUserFromStackOverflowByID, getUsersPostsFromStackOverflow } from '../server/stack-overflow-api'

let sortedByDate = false
let sortedByViews = false
let sortedByAnswers = false

const MainScreen = (props) => {

    const [user, setUser] = useState(null)
    const [userPosts, setUserPosts] = useState([])


    const [userId, setUserId] = useState(props.id.toString())
    const [isUserFound, setIsUserFound] = useState(true)


    useEffect(() => {
        if (userId !== '') searchUser()
    }, [])
    const onUserInputId = (inputText) => {
        setUserId(inputText.replace(/[^0-9]/g, ''))
    }

    const searchUser = () => {
        if (userId === '') return

        getUserFromStackOverflowByID(userId).then((data) => {
            if (data.length > 0) {
                const userFound = {
                    user_id: data[0].user_id,
                    display_name: data[0].display_name,
                    profile_image: data[0].profile_image,
                    reputation: data[0].reputation
                }
                setIsUserFound(true)
                setUser(userFound)
                searchUsersPosts()
                Keyboard.dismiss();
            } else {
                setUser(null)
                setUserPosts([])
                setIsUserFound(false)
            }
        }, (err) => {
            setUser(null)
            setUserPosts([])
            setIsUserFound(false)
            console.log(err)
        })
    }

    const searchUsersPosts = () => {
        getUsersPostsFromStackOverflow(userId).then((data) => {
            if (data.length > 0) {
                setUserPosts(data)
            }
        }, (err) => {
            console.log(err)
        })
    }

    const onPressSortByDate = () => {
        if (!sortedByDate) {
            const sorted = userPosts.sort(function (a, b) {
                return new Date(a.creation_date) - new Date(b.creation_date)
            })
            setUserPosts([...sorted])

        } else {
            const sorted = userPosts.reverse()
            setUserPosts([...sorted])
        }
        sortedByDate = !sortedByDate
    }

    const onPressSortByViews = () => {
        if (!sortedByViews) {
            const sorted = userPosts.sort(function (a, b) {
                return a.view_count - b.view_count
            })
            setUserPosts([...sorted])
        } else {
            const sorted = userPosts.reverse()
            setUserPosts([...sorted])
        }
        sortedByViews = !sortedByViews
    }

    const onPressSortByReplays = () => {
        if (!sortedByAnswers) {
            const sorted = userPosts.sort(function (a, b) {
                return a.answer_count - b.answer_count
            })
            setUserPosts([...sorted])
        } else {
            const sorted = userPosts.reverse()
            setUserPosts([...sorted])
        }
        sortedByAnswers = !sortedByAnswers
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <TitleContainer />
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>Search User By Id</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={20}
                        autoCorrect={false}
                        onChangeText={onUserInputId}
                        value={userId}
                    />

                    <Button title='Search' onPress={searchUser} />
                </View>
                {user && <UserContainer user={user} />}
                {userPosts.length > 0 &&
                    <SortButtonsContainer
                        onPressSortByDate={onPressSortByDate}
                        onPressSortByViews={onPressSortByViews}
                        onPressSortByReplays={onPressSortByReplays}
                    />}

                {userPosts.length > 0 && <PostContainer userPosts={userPosts} getPost={props.getWebViewAdress} />}

                {!isUserFound && <Text style={styles.warningMessage}>User not found</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#F9F7F5',
    },
    searchContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 300,
        maxWidth: '60%',
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    searchText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#00003f',

    },
    warningMessage: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },

})

export default MainScreen