import { IData } from "./reducer"

const ADD_DATA: string = 'ADD_DATA'
const CHANGE_DATA: string = 'CHANGE_DATA'
const HIDE_INPUT: string = 'HIDE_INPUT'
export const REQUESTS_DATA: string = 'REQUESTS_DATA'

export interface AddDataActionType  {
    type: typeof ADD_DATA,
    payload: Array<IData>
}

export interface ChangeDataActionType {
    type: typeof CHANGE_DATA,
    id: number,
    exchange_id: string
}

export interface HideInputActionType {
    type: typeof HIDE_INPUT,
    id: number,
    exchange_id: string
}

export interface FetchDataActionType {
    type: typeof REQUESTS_DATA
}

export const addData = (data: Array<IData>): AddDataActionType => {
    return {
        type: ADD_DATA,
        payload: data
    }
}

export const changeData = (id: number,inputValue: string): ChangeDataActionType => {
    return {
        type: CHANGE_DATA,
        id,
        exchange_id: inputValue
    }
}

export const hideInputWithoutChanging = (id: number,inputValue: string): HideInputActionType => {
    return {
        type: HIDE_INPUT,
        id,
        exchange_id: inputValue
    }
}

export function fetchData(): FetchDataActionType {
    return {
        type: REQUESTS_DATA
    }
}
