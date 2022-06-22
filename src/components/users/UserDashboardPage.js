import React, {useReducer, useEffect} from 'react'
import {Link} from 'react-router-dom'
import usersReducer from '../../reducers/users'
import AppContext from "../../context/app-context"
import AddUserForm from './AddUserForm'
import UserList from './UserList'
import GameDashboardPage from "../games/GameDashboardPage"

const UserDashboardPage  = () => {
    const [users, usersDispatch] = useReducer(usersReducer, [])

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'))

        if (users) {
            usersDispatch({ type: 'POPULATE_USERS', users })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return ( 
        <>
        <AppContext.Provider value={{ users, usersDispatch }}>
            <h2>Users:</h2>
            <AddUserForm />
            <UserList />
            <GameDashboardPage />
        </AppContext.Provider>
        </>
    )

}

export { UserDashboardPage as default }