import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login, logout } from '../../store/actions/userAction'
import './LogIn.scss'

export const LogIn = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [logInCred, setLogInCred] = useState({ email: '', password: '' })
    const loggedinUser = useSelector(state => state.userReducer.loggedinUser)

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setLogInCred({ ...logInCred, [field]: value })
    }

    const onLogin = async (ev) => {
        ev.preventDefault()
        await dispatch(login(logInCred))
        history.push('/')
    }

    const onLogout = async () => {
        await dispatch(logout())
        history.push('/')
    }

    return (
        <React.Fragment>
            {!loggedinUser && <form className="login main-layout flex-column" onSubmit={onLogin}>
                <label htmlFor="email">Enter your email:</label>
                <input type="email" id="email" name="email" value={logInCred.email} onChange={handleChange} required />
                <label htmlFor="password">Enter your password:</label>
                <input type="text" id="password" name="password" value={logInCred.password} onChange={handleChange} required />
                <button className="btn">Log In</button>
            </form>}
            {loggedinUser && <section className="logout">
                <h2>
                    Hello {loggedinUser.fullname}!
                </h2>
                <button onClick={onLogout}>Log out</button>
            </section>}
        </React.Fragment>
    )
}

