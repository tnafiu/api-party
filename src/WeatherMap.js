import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './WeatherMap.css'
import WeatherMapCity from './WeatherMapCity'

class WeatherMap extends Component {
  state = {
    cityname: '',
  }

  handleChange = (ev) => {
    this.setState({ cityname: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/weathermap/${this.state.cityname}`)
  }

  render() {
    return (
      <div className="WeatherMap">
        <img
          src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
          alt="WeatherMap"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a city name"
              value={this.state.cityname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a city
            </button>
          </div>
        </form>

        <Route path="/weathermap/:cityname" component={WeatherMapCity} />
      </div>
    )
  }
}

export default WeatherMap