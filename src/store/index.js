import { createStore } from 'redux'
import reducer from './reducer'
//store相当于图书馆，reducer相当于管理员
const store = createStore(reducer)
export default store