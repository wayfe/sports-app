import React, {useContext} from 'react'
import AppContext from "../../context/app-context"
import AddParticipantForm from "./AddParticipantForm"
import GameParticipantList from "./GameParticipantList"

const Game = ({ game }) => {
    const {gamesDispatch} = useContext(AppContext)

    return (
        <>
            <h3>{game.game}</h3>
            <p>{game.date}</p>
            <p>address: {game.address}</p>
            <p>price per game: {game.price}</p>
            <p>Participants: </p>
            <GameParticipantList 
                participants={game.participants}
                id={game.id}
            />
            <AddParticipantForm 
                game={game}
            />
            <button onClick={() => gamesDispatch({type: 'RMV_GAME', id: game.id})}>remove game</button>
        </>
    )
}

export { Game as default }