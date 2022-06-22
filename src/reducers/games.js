const gamesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_GAMES':
            return action.games
        case 'ADD_GAME':
            return [...state, {game: action.game, date: action.date, address: action.address, id: action.id, price: action.price, participants: []}]
        case 'RMV_GAME':
            return state.filter(({id}) => id !== action.id)
        case 'ADD_PARTICIPANT':
            return state.map((game) => {
                if (game.id === action.id) {
                    return {
                        ...game, participants: [...game.participants, action.selectedUser]
                    };
                } else {
                    return game
                }
            })
        case 'RMV_PARTICIPANT':
            return state.map((game) => {
                if (game.id === action.id) {
                    return {
                        ...game, participants: game.participants.filter((participant) => participant !== action.participantId)
                    };
                } else {
                    return game
                }
            });
        default:
            return state
    }
}

export {gamesReducer as default}
