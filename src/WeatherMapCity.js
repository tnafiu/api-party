import React, { Component } from 'react'

class WeatherMapCity extends Component {
  constructor(props) {
    super(props)

    this.state = {
        city: {}
    }

    this.fetchCityData()
  }

  componentDidUpdate(prevProps) {
      if (prevProps.match.params.cityname !== this.props.match.params.cityname) {
          this.fetchCityData()
      }
  }

  fetchCityData = () => {
      const {params} = this.props.match
      fetch(`api.openweathermap.org/data/2.5/weather?q=${params.cityname}`)
      .then(response => console.log(response))      
      .then(city => this.setState({city}))
  }
  render() {
    const { city } = this.state

    return (
      <div className="WeatherMapCity">
       {/* <img src={city.weather} alt="" />
         <h2>
          <a href={city.name} target="_blank">
            {city.weather[0]}
          </a>
         </h2>
        <h3>{city.name} ({city.sys})</h3>  */}
      </div>
    )
  }
}

export default WeatherMapCity