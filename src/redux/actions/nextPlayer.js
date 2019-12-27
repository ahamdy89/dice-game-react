export const nextPlayer = (players) => {
    let offset;

        let next = players.map((player,index, players)=> {

        if(player.active) {
        offset = index;
            return {
                ...player,
                active: !player.active
            }
        }
        if(index === offset + 1) {
            return {
                ...player,
                current: 0,
                active:!player.active
            }
        }

        return {
            ...player,
            current: 0,
            active: player.active
        }


    })
    console.log(offset)

    return dispatch => {
        dispatch({
        type: 'NEXT_PLAYER',
        payload: next
        })
    }
}