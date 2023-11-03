import { createStore } from "redux";

const editButtonReducer = (state = false,action) =>{

    if(action.type === 'startEdit'){
        return {
            visibility: true
        }
    }

    if(action.type === 'discardEdit'){
        return{
            visibility: false
        }
    }

    return state

}

const store = createStore(editButtonReducer);

export default store;