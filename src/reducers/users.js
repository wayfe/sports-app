const usersReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_USERS':
            return action.users
        case 'ADD_USER':
            return [...state, {name: action.name, phoneNum: action.phoneNum, id: action.id, tx: []}]
        case 'RMV_USER':
            return state.filter(({id}) => id !== action.id)
        case 'ADD_TX':
            return state.map((user) => {
                if (user.id === action.userId) {
                    return {
                        ...user, tx: [...user.tx, action.tx]
                    };
                } else {
                    return user
                }
            })
        default:
            return state
    }
}

export {usersReducer as default}
