import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="loader__container" id="loader" style={{ display: this.props.showloading }}>
                <div className="loader"></div>
            </div>
        )
    }
}
