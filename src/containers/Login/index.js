import React, { Component } from 'react'
import firebase from 'firebase'
import style from './style.scss'

class Login extends Component {

  _signIn () {
    console.log(firebase);
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result)
    }).catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='login'>
        <div className='user-badge'>
          <i className='fa fa-coffee' aria-hidden='true' />
        </div>
        <h2>Welcome to <strong>Meetings</strong></h2>
        <p>Instant agenda makes it easy to run meetings, even with remote participants</p>
        <div className='foot'>
          <button className='button' onClick={this._signIn.bind(this)}><i className='fa fa-google-plus' aria-hidden='true' /> Sign in with Google</button>
        </div>
      </div>
    )
  }
}

export default Login
