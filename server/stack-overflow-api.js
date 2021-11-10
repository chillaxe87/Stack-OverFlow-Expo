import axios from 'axios'

// const STACKEXCHANGE_API = process.env.STACKEXCHANGE_API

export const getUserFromStackOverflowByID = async (id) => {
    const requestUrl = 'https://api.stackexchange.com/users/' + id + '?&site=stackoverflow'
    try {
        const res = await axios.get(requestUrl)
        if (!res) {
            throw new Error('user not found')
        }
        return res.data.items
    } catch (err) {
        console.log('error')
        throw err
    }
}

export const getUsersPostsFromStackOverflow = async (id) => {
    const requestUrl = 'https://api.stackexchange.com/users/' + id + '/questions?order=desc&sort=creation&site=stackoverflow'
    try {
        const res = await axios.get(requestUrl)
        if (!res) {
            throw new Error('user not found')
        }
        return res.data.items
    } catch (err) {
        throw err
    }
}