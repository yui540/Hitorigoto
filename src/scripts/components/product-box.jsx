import React from 'react'

export default class ProductBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="product-box">
        <h4>アプリ・サービス</h4>
        <section>
        {this.props.json.app.map((app, key) => {
          return (
            <a className="product-li" href={ app.link } key={ key } target="_blank">
              <img src={ app.thumb } alt={ app.name } />
              <h5>{ app.name }</h5>
              <p>{ app.description }</p>
              <small>{ app.date }</small>
            </a>
          )
        })}
        </section>
        <h4>ライブラリ</h4>
        <section>
        {this.props.json.lib.map((lib, key) => {
          return (
            <a className="product-li" href={ lib.link } key={ key } target="_blank">
              <img src={ lib.thumb } alt={ lib.name } />
              <h5>{ lib.name }</h5>
              <p>{ lib.description }</p>
              <small>{ lib.date }</small>
            </a>
          )
        })}
        </section>
        <h4>デザイン</h4>
        <section>
        {this.props.json.design.map((design, key) => {
          return (
            <a className="product-li" href={ design.link } key={ key } target="_blank">
              <img src={ design.thumb } alt={ design.name } />
              <h5>{ design.name }</h5>
              <p>{ design.description }</p>
              <small>{ design.date }</small>
            </a>
          )
        })}
        </section>
        <h4>動画</h4>
        <section>
        {this.props.json.movie.map((movie, key) => {
          return (
            <a className="product-li" href={ movie.link } key={ key } target="_blank">
              <img src={ movie.thumb } alt={ movie.name } />
              <h5>{ movie.name }</h5>
              <p>{ movie.description }</p>
              <small>{ movie.date }</small>
            </a>
          )
        })}
        </section>
      </section>
    )
  }
}
