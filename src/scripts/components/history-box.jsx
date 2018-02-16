import React from 'react'

export default class HistoryBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="history-box">
      {this.props.json.map((history, key) => {
        return (
          <section className="history-li" key={ key }>
            <div className="tag">
              <span className="fa fa-tag"></span>
              v{ history.version }
            </div>
            <h3 className="title">{ history.title }</h3>
            <img src={ history.thumb } alt={ history.title } />
            <a href={ history } target="_blank">
              v{ history.version }を見る
            </a>
          </section>
        )
      })}
      </div>
    ) 
  }
}
