import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  changeTheme = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getButtonText = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Light Mode' : 'Dark Mode'
  }

  getContainerClass = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'content-container-black' : 'content-container-white'
  }

  getHeadingClass = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'heading-white' : 'heading-black'
  }

  getButtonClass = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'btn1' : 'btn2'
  }

  render() {
    const buttonText = this.getButtonText()
    const containerClassName = this.getContainerClass()
    const headingClass = this.getHeadingClass()
    const buttonClass = this.getButtonClass()

    return (
      <div className="app-container">
        <div className={containerClassName}>
          <h1 className={headingClass}>Click To Change Mode</h1>
          <button
            className={buttonClass}
            onClick={this.changeTheme}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
