

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
                    (player, i) => player.active  ? {...player, current: player.current + action.payload}
                    : player
                )
            }
        case 'ADD_SCORE': 
            return {
                ...state, 
                players: state.players.map(
                    (player, i) => player.active  ? {...player, score: player.current + player.score, current : 0}
                    : player
                )
            }
        case 'NEXT_PLAYER':
            return {
                ...state,
                players: action.payload
            }
        default:
            return state;
    }
}


export default playersReducer;