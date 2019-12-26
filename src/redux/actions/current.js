export const addCurrent = (dice) => {
    console.log(dice)
    return dispatch => {
        dispatch({
        type: 'ADD_CURRENT',
        payload: dice
        })
    }
}