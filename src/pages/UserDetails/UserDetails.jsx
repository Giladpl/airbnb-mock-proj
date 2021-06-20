import { useSelector } from 'react-redux'
import './UserDetails.scss'

export const UserDetails = (props) => {
    const loggedinUser = useSelector(state => state.userReducer.loggedinUser)

    return (
        loggedinUser && <section className='user-details'>
            <div>{loggedinUser.fullname}</div>
        </section>
    )
}

