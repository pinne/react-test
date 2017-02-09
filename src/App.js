import React, { Component } from 'react'

import CounterList from './counters/components'
import Weather from './weather/components'

class App extends Component {
  render() {
    return (
      <div>
        <CounterList />
        <Weather />
      </div>
    );
  }
}

export default App
