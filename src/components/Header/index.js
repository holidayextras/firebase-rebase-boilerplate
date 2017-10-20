import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.scss'
import firebase from 'firebase/app'

class Header extends Component {
  _signOut () {
    firebase.auth().signOut()
  }
  render () {
    return (
      <div className='header'>
        { this.props.user &&
          <ul className='menu'>
            <li>
              <Link activeClassName='active' to='/home'>
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName='active' to='/account'>
                Account
              </Link>
            </li>
          </ul>
        }
        { this.props.user &&
          <div className='user'>
            <img src={this.props.user.photoURL} />
            <span>
              {this.props.user.displayName}<br/>
              <Link onClick={this._signOut}>Logout</Link>
            </span>
          </div>
        }
      </div>
    )
  }
}

export default Header;
