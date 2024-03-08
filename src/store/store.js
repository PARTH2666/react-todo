import displaytask from "./displayTask.jsx/displayTask";
import { combineReducers, createStore } from "redux";



const allReducer = combineReducers({
    displaytask:displaytask,
})


const store  = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store