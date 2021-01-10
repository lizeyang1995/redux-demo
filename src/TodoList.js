import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
import { addItemAction, changeInputAction, deleteItemAction, getListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios'


class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        //不加这个的话，inputValue的值其实没变
        store.subscribe(this.storeChange)
    }

    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem = (index) => {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount() {
        axios.get("http://localhost:3000/data")
        .then(res => {
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }

    render() {
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            list={this.state.list}
            deleteItem={this.deleteItem}
            />
        );
    }
}

export default TodoList;