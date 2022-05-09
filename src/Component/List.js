import React, { Component } from "react";
class List extends Component{
    render(){
        return(

            <div>
                {this.props.users.map(user=>{
                return(
                     <p  key={user.id}><span onClick={() => this.props.HandelViewUser(user)}>{user.name}</span> 
                     <button onClick={()=>this.props.HandelDeletaUser(user.id)}>Delete</button>
                     </p>
                )
            })}
            {this.props.user ? <h3>
                name = {this.props.user.name}<br/>
                age = {this.props.user.age}<br/>
                price = {this.props.user.price}<br/>
            </h3>:""}
            </div>
        )
    }
}
export default List