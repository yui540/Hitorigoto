import React from 'react'

export default class MemoriesBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="memories-box">
      {this.props.json.map((memories, key) => {
        return (
          <a className="memories-li" key={ key } href={ memories.link } target="_blank">
            <img src={ memories.thumb } alt={ memories.title } />
            <h4>{ memories.title }</h4>
            <small>{ memories.date }</small>
          </a>
        )
      })}
      </section>
    )
  }
}
