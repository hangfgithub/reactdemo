import React, { Component } from 'react'

export default class TodoList extends Component {

    componentWillReceiveProps(){
        this.setState({})
    }
    handleClick = (id) => {
        this.props.handleClick(id)
    }

    render() {
        const { TodoList } = this.props
        console.log('TodoList.js更新了')
        return (
            <ul>
                {
                    TodoList.map((item) => {
                        return (<li 
                        key={item.id} 
                        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                        onClick={()=>{this.handleClick(item.id)}}
                        >
                            {item.text}
                        </li>)
                    })
                }
            </ul>
        )
    }
}
