import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
    reducer : {counter :counterReducer,
               authenticated : authReducer
            }
})

export default store;







//const counterReducer = (state = initialstate, action) => {
    //     if(action.type === 'increment'){
    //         return {
    //             ...state,
    //             counter : state.counter + 1
    //         }
    //     }
    //     else if(action.type === 'decrement'){
    //         return {
    //             ...state,
    //             counter : state.counter - 1
    //         }
    //     }
    //     else if(action.type === 'increase') {
    //         return {
    //             ...state,
    //             counter : state.counter + action.amount
    //         }
    //     }
    //     else if(action.type === 'toggle') {
    //         return {
    //             ...state,
    //             show : !state.show
    //         }
    //     }
    //     else {
    //         return state
    //     }
    // }

    //const store =  createStore(counterReducer)