

const INITIAL_STATE = {
    players: [],
}

const playersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PLAYERS':
            return {
                ...state,
                players: action.payload
            }
        case 'ADD_CURRENT':
            return {
                ...state, 
                players: state.players.map(
                    (player, i) => player.active === true ? {...player, current: action.payload}
                    : player
                )
            }
        default:
            return state;
    }
}


export default playersReducer;