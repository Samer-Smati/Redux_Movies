import {ADD,DELETE,MYLISTFROMAPI} from "./action-type" 

const initState = {
    myListOfmovies:[

    ]
}

export const movieReducer = (state=initState,action) => {
    switch (action.type) {
        case ADD:return{
            ...state, 
            myListOfmovies:[...state.myListOfmovies,action.payload].map(movie => movie)  
        }
        case DELETE:return{
            ...state, 
            myListOfmovies:state.myListOfmovies.filter((movie)=> movie._id !== action.payload)
        }
        case MYLISTFROMAPI:return{
            ...state, 
            myListOfmovies:action.payload
        }
        default:return state
    }
}