import { useState } from 'react'
import './LogIn.scss'

export const LogIn = (props) => {
    const [logInCred, setLogInCred] = useState({ email: '', password: '' })

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setLogInCred({ ...logInCred, [field]: value })
    }

    const onLogin = (ev) => {
        ev.preventDefault()
        console.log(logInCred);
    }

    return (
        <form className="login main-layout flex-column" onSubmit={onLogin}>
            <label htmlFor="email">Enter your email:</label>
            <input type="email" id="email" name="email" value={logInCred.email} onChange={handleChange} required />
            <label htmlFor="password">Enter your password:</label>
            <input type="text" id="password" name="password" value={logInCred.password} onChange={handleChange} required />
            <button className="btn">Log In</button>
        </form>
    )
}

