import React from 'react'

export default class SponsorBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="sponsor-box">
      {this.props.json.map((sponsor, key) => {
        return (
          <section className="sponsor-li" key={ key }>
            <img className="icon"
              src={ `./images/sponsor/${ sponsor.id }.png` }
              alt={ sponsor.id }
            />
            <h3 className="name">
              <span>{ sponsor.name }</span>
              <span>様</span>
            </h3>
          </section>
        )
      })}
      </section>
    )
  }
}
