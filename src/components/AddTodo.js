import React, { Component } from 'react'

export default class AddTodo extends Component {
    // constructor(){
    //     super()
    // }
    onSubmit = (e) => {
        e.preventDefault()
        const input = this.refs.todoInput
        if (!input.value.trim()) {
            return
        }
        // dispatch(addTodo(input.value))
        this.props.addTodo(input.value)
        input.value = ''
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props !== nextProps
        // return true
    }
    render() {
        console.log('AddTodo.js更新了')
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <input ref="todoInput" type="text" />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
