import React, {useContext, useState} from 'react';
import AppContext from "../../context/app-context"
import { v4 as uuid }from 'uuid'


const AddParticipantForm = ({game}) => {
    const {users, gamesDispatch, usersDispatch} = useContext(AppContext)

    const [selectedUser, setSelectedUser] = useState("")

    const addParticipant = (e) => {
        e.preventDefault()
        gamesDispatch({
            type: 'ADD_PARTICIPANT',
            id: game.id, selectedUser
        })
        const tx = {
            note: game.game,
            amount: -Math.abs(game.price),
            date: game.date,
            txid: uuid()
        }
        usersDispatch({
            type: 'ADD_TX',
            userId: selectedUser, 
            tx
        })
    }

    return (
        <div>
            <form onSubmit={addParticipant} >
                <p>add participants:</p>
                <select onChange={(e) => setSelectedUser(e.target.value)}>
                    <option>select user</option>
                        {users.map((user) => 
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        )}
                </select>
                <button>add participant</button>
            </form>
        </div>
    )
}

export {AddParticipantForm as default}