export const addPlayers = (players) => {
    const playersList = players.players;
    const playerArray = [];

    playersList.map((p, i) => {
        playerArray.push({
            name: playersList[i],
            current:0,
            active: false,
            winner:false,
            score: 0
        });
        playerArray[0].active = true;
        return playerArray;
    })

    return dispatch => {
        dispatch({
        type: 'ADD_PLAYERS',
        payload: playerArray
        })
    }
}