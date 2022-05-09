import React, { Component } from "react";


class User extends Component{
    state= {
    user:"",
    isRegister:false
    }
    HandelRegister=(e)=>{
    this.setState({
        user: e.target.value,

    })
    }
    HandelSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",this.state.user)
    }
    render(){
        return(
            <div className="">
                {this.state.isRegister ?(
                <from OnSubmit={this.HandelFromlogin}>
                <input type={"text"} placeholder="LoginUser" onChange={this.HandelUsers}/>
                <input type={"submit"} value="Login"/>
            </from>):(
            <from >
                  <input type={"text"} placeholder="RegisterUser" onChange={this.HandelRegister}/>
                  <input type={"submit"} value="Register"/>
              </from>)}

              </div>
        )
      }
}
export default User
