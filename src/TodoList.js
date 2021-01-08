import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'


class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        //不加这个的话，inputValue的值其实没变
        store.subscribe(this.storeChange)
    }

    changeInputValue = (e) => {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    clickBtn = () => {
        const action = {
            type: ADD_ITEM,
        }
        store.dispatch(action)
    }

    deleteItem = (index) => {
        const action = {
            type: DELETE_ITEM,
            index: index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{ margin: '200px' }}>
                <div>
                    <Input placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue} 
                    />
                    <Button 
                        type='primary'
                        onClick={this.clickBtn}
                    >提交</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item}</List.Item>)} />
                </div>
                <div>{this.state.inputValue}</div>
            </div>
        );
    }
}

export default TodoList;