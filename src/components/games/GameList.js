import React, {useContext} from 'react'
import AppContext from "../../context/app-context"

import Game from "./Game"

const GameList = () => {
    const {games} = useContext(AppContext)
    
    return games.map((game) => (
        <Game key={game.id} game={game}/>
    ))
}

export { GameList as default }