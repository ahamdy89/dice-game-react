import {combineReducers} from 'redux';
import playersReducer from './players';



export const rootReducers = combineReducers({
    playersList : playersReducer
});

export default rootReducers;
