import React, { Component } from 'react'
import { connect } from 'react-redux'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Stockholm'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    this.props.onFetch(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h4>Weather</h4>
        {this.props.value}
        <form
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="city"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Fetch"
          />
        </form>
        <pre>
          {
            JSON.stringify(this.props.weather, null, 2)
          }
        </pre>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onFetch: (city) => {
      dispatch({
        type: 'FETCH_DATA_REQUEST',
        payload: city
      })
    }
  }
}

//export default Weather
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)
