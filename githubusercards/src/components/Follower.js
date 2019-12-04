import React, { Component } from 'react'

export default class Follower extends Component {
    render() {
        // console.log("follower: ", this.props)
        return (
            <div>
                {this.props.follower.login}
            </div>
        )
    }
}
