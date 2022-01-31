const initialState = {
    data: null,
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                data: action.payload
            }


        case 'CHANGE_DATA':
            let previousData = state.data
            previousData.map((el) => {
                
                if(el.id === action.id){
                    console.log("action.exchange_id", action.exchange_id)
                    return el.exchange_id = action.exchange_id
                }
            })
            return {
                ...state,
                data:  [
                    ...previousData
                ]           
            }
        

        case 'HIDE_INPUT': 
            return {
                ...state,
                data: [
                    ...state.data
                ]
            }
            
        default:
            return state
    }
}