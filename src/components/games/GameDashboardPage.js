import React, {useReducer, useEffect, useContext} from 'react'
import gamesReducer from '../../reducers/games'
import AppContext from "../../context/app-context"
import AddGameForm from './AddGameForm'
import GameList from './GameList'

const GameDashboardPage  = () => {
    const [games, gamesDispatch] = useReducer(gamesReducer, [])
    const {users, usersDispatch} = useContext(AppContext)

    useEffect(() => {
        const games = JSON.parse(localStorage.getItem('games'))

        if (games) {
            gamesDispatch({ type: 'POPULATE_GAMES', games })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games))
    }, [games])

    return ( 
        <AppContext.Provider value={{ games, gamesDispatch, users, usersDispatch }}>
            <h2>Games:</h2>
            <AddGameForm />
            <GameList />
        </AppContext.Provider>
    )

}

export { GameDashboardPage as default }