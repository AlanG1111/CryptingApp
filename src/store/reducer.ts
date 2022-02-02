const initialState: InitialStateType = {
    data: null,
}

export type InitialStateType = {
    data:  Array<IData> | null
}

export interface IData {
    id: number ,
    exchange_id: string,
    name: string, 
    website: string, 
    volume_24h: number
}

export const dataReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    if(action.type === 'ADD_DATA') {
        return {
            ...state,
            data: action.payload
        }
    }
    if(action.type === 'CHANGE_DATA') {
        let previousData = state.data

            if(previousData !== null) {
                previousData.map((el: IData) => {  
                    if(el.id === action.id) {
                        console.log("action.exchange_id", action.exchange_id)
                        return el.exchange_id = action.exchange_id
                    }
                })
            } else {
                return state
            }
            return {
                ...state,
                data: [
                    ...previousData
                ]           
            } 
    }
    if(action.type === 'HIDE_INPUT') {
        if(state.data){
            return {
                ...state,
                data: [
                    ...state.data
                ]
            }
        }
    }
    return state
}
