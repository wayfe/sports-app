import React, {useContext} from 'react'
import AppContext from "../../context/app-context";

const Participant = ({participantId, id}) => {
    const {users, gamesDispatch} = useContext(AppContext)

    return (
        <>
            <p>{users.find(user => user.id === participantId).name}</p>
            <button onClick={() => gamesDispatch({type: 'RMV_PARTICIPANT', participantId, id})}>x</button>
        </>
    )
}

export { Participant as default }