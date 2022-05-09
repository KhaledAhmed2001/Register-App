import React, { Component } from 'react'

export class UserRegister extends Component {
  render() {
    return (
      <form onSubmit={this.props.HandelRegisterSubmit}>
                <input type={"text"} onChange={this.props.HandelRegister} placeholder="Register"value={this.props.stateRegisterUser}/>
                <input type={"submit"} value="Register"/>

            </form>
    )
  }
}

export default UserRegister