export const addPlayers = (players) => {
    const playersArray = players.players;
    const playerObject = [];
    for (let i = 0; i < playersArray.length; i++) {
        playerObject.push({
            name: playersArray[i],
            current:0,
            active: false,
            winner:false
        });
    }
    return dispatch => {
        dispatch({
        type: 'ADD_PLAYERS',
        payload: playerObject
        })
    }
}