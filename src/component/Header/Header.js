import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const list = this.props.category.map((dt, index) =>
            <span key={index} onClick={() => this.props.populateNews(dt)}>{dt}</span>
        );
        return (
            <div className="menu__category">{list}</div>
        )
    }
}
