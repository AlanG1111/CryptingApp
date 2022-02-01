import { AddDataActionType, ChangeDataActionType, HideInputActionType } from './action'

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

export const addDataReducer = (state: InitialStateType = initialState, action: AddDataActionType): InitialStateType => {
    if(action.type === 'ADD_DATA') {
        return {
            ...state,
            data: action.payload
        }
    } return state
}

export const changeDataReducer = (state: InitialStateType = initialState, action: ChangeDataActionType): InitialStateType => {
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
    }   return state
}

export const hideInputReducer = (state: InitialStateType = initialState, action: HideInputActionType): InitialStateType => {
    if(action.type === 'HIDE_INPUT') {
        if(state.data){
            return {
                ...state,
                data: [
                    ...state.data
                ]
            }
        } 
    }   return state
}




// export const dataReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    // if(action.type === 'ADD_DATA') {
    //     return {
    //         ...state,
    //         data: action.payload
    //     }
    // }
    // if(action.type === 'CHANGE_DATA') {
    //     let previousData = state.data

    //         if(previousData !== null) {
    //             previousData.map((el: IData) => {  
    //                 if(el.id === action.id) {
    //                     console.log("action.exchange_id", action.exchange_id)
    //                     return el.exchange_id = action.exchange_id
    //                 }
    //             })
    //         } else {
    //             return state
    //         }
    //         return {
    //             ...state,
    //             data: [
    //                 ...previousData
    //             ]           
    //         } 
    // }
    // if(action.type === 'HIDE_INPUT') {
    //     if(state.data){
    //         return {
    //             ...state,
    //             data: [
    //                 ...state.data
    //             ]
    //         }
    //     }
    // }
//     return state
// }
