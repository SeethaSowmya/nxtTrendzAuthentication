import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="LoginContainer">
        <div className="leftImage">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="img"
            alt="website login"
          />
        </div>
        <div className="formContainer">
          <form className="form" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="imgSize"
              alt="website logo"
            />

            <div className="inputElementsContainer">
              <label className="space" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                className="inputElement"
                onChange={this.onChangeUsername}
              />
              <br />
            </div>
            <div className="inputElementsContainer">
              <label className="space" htmlFor="password">
                PASSWAORD
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="inputElement"
                id="password"
                onChange={this.onChangePassword}
              />
            </div>

            <button type="submit" className="buttonLogin">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
