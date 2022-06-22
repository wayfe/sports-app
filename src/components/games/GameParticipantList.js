import React from 'react'
import Participant from "./Participant"

const GameParticipantList = ({participants, id}) => {

    return participants.map((participant) => (
            <Participant 
                participantId={participant}
                key={participant}
                id={id}
            />
    ))   
}

export { GameParticipantList as default }

