// const initialState = {
//     count: 0,
// }

// export const rootReducer = (state = initialState, action)=>{
//     switch (action){
//         case increment:
//             return{
//                 ...state,
//                 count: state.count + action.payload,
//             }
//     }
// }

const initialState = {
    count: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case "increment":
            return {
                ...state,
                count: state.count + action.payload,
            }

        case "decrement":
            return {
                ...state,
                count: state.count - action.payload,
            }
        
        default:
            return state;
    }
}