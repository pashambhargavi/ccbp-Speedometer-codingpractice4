// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  onApplyBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="header-container">
          <h1 className="header">SPEEDOMETER</h1>
        </div>

        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
        </div>
        <div className="text-container">
          <h1 className="header-2">Speed is {speed}mph</h1>
          <p className="tagline">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="button accelerate"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="button brakes"
              type="button"
              onClick={this.onApplyBrakes}
            >
              Apply Brakes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
