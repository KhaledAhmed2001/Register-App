import React, { Component } from "react";
class UserLogin extends Component{
    render(){
        return(
            <form onSubmit={this.props.HandelLoginSubmit}>
            <input type={"text"} onChange={this.props.HandelLogin} placeholder="Login User"value={this.props.LoginUser}/>
            <input type={"submit"} value="Login"/>
        </form>

        )
    }
}
export default UserLogin
