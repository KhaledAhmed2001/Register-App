import React, { Component } from "react"
import LoginListing from "./Component/LoginListing";
// import User from "./Component/User";
// import Header from "./Component/Header";
class App extends Component{
  render(){
    return(
      <div>
        <h1>Hallo React</h1>
        {/* <Header/> */}
        {/* <User/> */}
        {/* <User/> */}
        <LoginListing/>
      </div>
    )
  }
}
export default App;