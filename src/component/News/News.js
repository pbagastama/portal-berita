import React, { Component } from 'react'
import Loading from '../Loading/Loading'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        }
        this.convertDate = this.convertDate.bind(this);
    }
    convertDate(val) {
        return val.replace("T", " ").replace("Z", " ");

    }
    render() {
        const News = this.props.newsData.map((data, index) =>
            <div key={index} className="news__container">
                <img src={data.urlToImage} style={{ width: '100%' }} alt="img" />
                <div className="news__list">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <a href={data.url} target="_blank">Read more</a>
                </div>
                <div className="news__list__head">
                    <p>{data.source.name}</p>
                    <p>{this.convertDate(data.publishedAt)}</p>
                </div>
            </div>
        )
        return (
            <div>
                <div className="wrapper__news">
                    {News}
                    <button id="buttonLoad" onClick={() => this.props.loadMore(this.props.thisCategory)} style={{ display: this.props.buttonLoad }} className="load__more">load more</button>
                </div>
                <Loading showloading={this.props.loading} />
            </div>
        )
    }
}
