export const addPlayers = (players, gamePlayers) => {
    const playersList = players.players;
    let playerArray = [];
    if (gamePlayers.length > 0){
        playerArray = gamePlayers
    }

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