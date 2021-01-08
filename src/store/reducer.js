import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    inputValue: 'write something',
    list: [
        '11点开会',
        '11.30吃饭',
        '12.00上班'
    ]
}
export default (state = defaultState, action) => {
    //reducer里面只能接受state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}