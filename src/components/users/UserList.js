import React, {useContext} from 'react'
import User from './User'
import AppContext from "../../context/app-context";

const UserList = () => {
    const {users} = useContext(AppContext)
    
    return users.map((user) => (
        <User key={user.id} user={user}/>
    ))
}

export { UserList as default }