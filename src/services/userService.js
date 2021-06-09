import { asyncStorageService } from './asyncStorageService.js'
// import { httpService } from './httpService.js';

export const userService = {
    login,
    logout,
    signup,
    query,
    getById,
    remove,
    update,
    getLoggedInUser
}

// window.userService = userService
console.log('user service');
localStorage.setItem('user', JSON.stringify({ fullname: 'Puki Ben David', email: 'puki@gmail.com', password: '1234' }))
// signup({ fullname: 'Puki Ben David', email: 'puki@gmail.com', password: '1234' })

function query() {
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
    const user = users.find(user => user.email === userCred.email)
    return _saveLocalUser(user)
}

async function signup(userCred) {
    console.log('hi');
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