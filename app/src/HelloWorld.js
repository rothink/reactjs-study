import React, { Component } from 'react'
import StateInput from './StateInput';

class HelloWorld extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Rodrigo Araujo',
            txt: this.props.txt
        }
    }

    render() {
        const result = 4
        const style = {
            color: '#ff0000',
            fontSize: 50,

        }
        return (
            <div className="my-class-from-react">
                <StateInput />
                {/* my first component */}
                <h1 style={style}>{this.state.txt}</h1>
                <h4>{ result === 2 * 2 ? <div><ul><li>true</li></ul></div> : <div><ul><li>false</li></ul></div> }</h4>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWorld