import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

//用中间件
export const getTodoList = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/data")
        .then(res => {
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}