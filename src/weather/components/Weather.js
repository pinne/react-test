import React, { Component } from 'react'
import { connect } from 'react-redux'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Stockholm'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h4>Weather</h4>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.props.onFetch}>Fetch</button>
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
    onFetch: (e) => {
      dispatch({
        type: 'FETCH_DATA_REQUEST',
        payload: event.target.value
      })
    }
  }
}

//export default Weather
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)
