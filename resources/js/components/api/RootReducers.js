import {combineReducers} from "redux";

import CreaterReducer from './reducers/TasksReducer'

const RootReducer = combineReducers({
    tasks: CreaterReducer
})

export default RootReducer