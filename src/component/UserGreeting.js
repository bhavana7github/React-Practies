import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    return this.state.isLoggedIn ? (

       <div>Welcome To React(if condition for true)</div>
     ) : (
       <div>Welcome Guest(if condition for false)</div>

     )

  }
}
// const el=<h1>hello rahul</h1>
export default UserGreeting
