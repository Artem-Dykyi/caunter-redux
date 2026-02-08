const initialState = {
    count: 0,
}

export const rootReducer = (state = initialState, action)=>{
    switch (action){
        case increment:
            return{
                ...state,
                count: state.count + action.payload,
            }
    }
}