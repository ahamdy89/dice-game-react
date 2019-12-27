export const gameName = (name) => {
    return dispatch => {
        dispatch({
        type: 'ADD_NAME',
        payload: name
        })
    }
}