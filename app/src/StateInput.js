import React, { Component } from 'react'

class StateInput extends Component  {

    constructor(props) {

        super(props)

        this.state = {
            name: '',
            txt: ''
        }

        setTimeout(() => {
            this.setState({
                name: 'Rodrigo state'
            })
        },1000)
    }

    render () {
        console.info(this.state)
        return (
            <div>
                <input type="text" name="name" value={this.state.name}/>
            </div>
        )
    }
}

export default StateInput