import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography, Divider } from 'antd';
import store from './store';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        console.log(this.state);
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <Input 
                onChange={this.handleInputChange}
                value={this.state.inputValue}
                placeholder='todo info' 
                style={{width:'300px', marginRight:'10px'}}
                />

                <Button type='primary' onClick={this.handleBtnClick}> submit </Button> 
                <List
                    dataSource={this.state.list}
                    //use antd for the UI, so each item is rendered by listItem
                    renderItem={(item, index) => (
                    <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                    <Typography.Text mark></Typography.Text> {item}
                    </List.Item>
      )}
    />
            </div>
        )
    }
    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        //console.log('store changed')
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = {
            type: 'add_todo_item',
        }
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: 'delete_todo_item',
            index //give the current index to reducer
        }
        store.dispatch(action);
    }

}


