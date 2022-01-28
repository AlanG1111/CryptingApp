const ADD_DATA = 'ADD_DATA'
const CHANGE_DATA = 'CHANGE_DATA'
const HIDE_INPUT = 'HIDE_INPUT'

export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload: data, 
    }
}


export const changeData = (id,inputValue) => {
    return {
        type: CHANGE_DATA,
        id,
        exchange_id: inputValue
    }
}

export const hideInputWithoutChanging = (id,inputValue) => {
    return {
        type: HIDE_INPUT,
        id,
        exchange_id: inputValue
    }
}



