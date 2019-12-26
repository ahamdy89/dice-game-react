

const INITIAL_STATE = {
    players: {players: []}
}

const playersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PLAYERS':
            return {
                ...state,
                players: action.payload
            }
        default:
            return state;
    }
}


export default playersReducer;