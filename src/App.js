import React, { Component } from 'react'
import Header from './components/header'
import Login from './containers/Login'
import firebase from 'firebase'

class App extends Component {
  static contextTypes = {
    history: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount () {
    // User Redirect
    firebase.auth().onAuthStateChanged((user) => {
      const goTo = user ? '/home' : '/login'
      this.props.router.push(goTo)
      this.setState((state) => ({ user: user }))
    })
  }

  render () {
    return (
      <div>
        <Header user={this.state.user} />
        {!this.state.user && <Login /> }
        {this.state.user && React.cloneElement(this.props.children, { user: this.state.user })}
      </div>
    )
  }
}

export default App
