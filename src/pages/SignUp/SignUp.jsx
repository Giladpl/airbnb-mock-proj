import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signup } from '../../store/actions/userAction'
import './SignUp.scss'

export const SignUp = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [signUpCred, setSignUpCred] = useState({ fullname: '', email: '', password: '' })

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setSignUpCred({ ...signUpCred, [field]: value })
    }

    const onSignUp = async (ev) => {
        ev.preventDefault()
        await dispatch(signup(signUpCred))
        history.push('/')
    }

    return (
        <form className="signup main-layout flex-column" onSubmit={onSignUp}>
            <label htmlFor="fullname">Enter your full name:</label>
            <input type="text" id="fullname" name="fullname" value={signUpCred.fullname} onChange={handleChange} required />
            <label htmlFor="email">Enter your email:</label>
            <input type="email" id="email" name="email" value={signUpCred.email} onChange={handleChange} required />
            <label htmlFor="password">Enter your password:</label>
            <input type="text" id="password" name="password" value={signUpCred.password} onChange={handleChange} required />
            <button className="btn">Sign Up</button>
        </form>
    )
}

