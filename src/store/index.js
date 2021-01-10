import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//store相当于图书馆，reducer相当于管理员
const store = createStore(reducer, applyMiddleware(thunk))
export default store