
import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

let idcount = 1
export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            todoListAll:[], // 记录全部添加的todolist
            todoList:[], // 记录选中的todolist
            showAction: 'all',
            data:{
                a:'1111',
                b:'2222',
                c:'3333'
            }
        }
    }
    componentDidMount(){
        console.log('compentdidmount===>parent')
    }
    addTodo = (value) => {
        const { todoListAll, showAction } = this.state
        const todo = {
            id: idcount++,
            text: value,
            completed: false,
        }
        todoListAll.push(todo)
        this.setState({ todoListAll }, function(){
            this.filterFun(showAction)
        })
        
    }
    filterFun = (action) => {
        const { todoListAll, todoList } = this.state
        let filterList = []
        if(action === 'all'){
            filterList = todoListAll
        }else if(action === 'active'){
            filterList = todoListAll.filter(todo => !todo.completed)
        }else if(action === 'completed'){
            filterList = todoListAll.filter(todo => todo.completed)
        }else{
            filterList = todoList
        }
        this.setState({
            showAction: action,
            todoList: filterList,
        })
    }
    handleClick = (id) => {
        const { todoList } = this.state
        todoList.forEach((item) => {
            if(item.id === id){
                item.completed = !item.completed
            }
        })
        this.setState({todoList})
    }
    changeState = () => {

        this.setState({
            aaaaaa:'aaaa'
        }, function(){
            console.log('回调函数',this.state)
        })
        console.log('setstate后，this.state', this.state)
        setTimeout(() => {
            console.log('settimeout', this.state)
        }, 0)
    }
    render() {
        console.log('parrent')
        const { todoList } = this.state
        console.log('footer', <Footer/>)
        console.log('render this.state', this.state)
        return (
        <div>
            <AddTodo addTodo={this.addTodo} />
            <TodoList TodoList = { todoList } handleClick={this.handleClick} />
            <Footer filterFun = { this.filterFun }/>
            <button onClick={this.changeState}>点击更新state</button>
        </div>
        )
    }
}
