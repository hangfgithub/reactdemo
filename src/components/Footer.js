import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    handleClick = (item) => {
        this.props.filterFun(item)
    }
    render() {
        console.log('footer更新了')
        return (
            <div>
                <button onClick={() => { this.handleClick('all') }}>all</button>
                <button onClick={() => { this.handleClick('active') }}>active</button>
                <button onClick={() => { this.handleClick('completed') }}>completed</button>
            </div>
        )
    }
}
