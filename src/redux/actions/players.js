export const addPlayers = (players) => {
    console.log(players)
    return dispatch => {
        dispatch({
        type: 'ADD_PLAYERS',
        payload: players
        })
    }
}