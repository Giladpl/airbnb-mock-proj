import {asyncStorageService} from './asyncStorageService.js'
// import { httpService } from './httpService.js';

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedInUser
}

// window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Tuki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})
// userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 100})

function getUsers() {
    // return httpService.get(`user`)
    return asyncStorageService.query('user')
}

function getById(userId) {
    // return httpService.get(`user/${userId}`)
    return asyncStorageService.get('user', userId)
}
function remove(userId) {
    // return httpService.delete(`user/${userId}`)
    return asyncStorageService.remove('user', userId)
}

async function update(user) {
    // user = await httpService.put(`user/${user._id}`, user)
    // if (getLoggedInUser()._id === user._id) _saveLocalUser(user)
    return asyncStorageService.put('user', user)
}

async function login(userCred) {
    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
    
    const users = await asyncStorageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)
}

async function signup(userCred) {
    // const user = await httpService.post('auth/signup', userCred)
    const user = await asyncStorageService.post('user', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(('loggedinUser') || 'null'))
}