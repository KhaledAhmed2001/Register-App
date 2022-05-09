import React, { Component } from "react";
import List from "./List";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
class LoginListing extends Component{
    state={
        RegisterUser:"",
        LoginUser:"",  
        isRegister:false,
        Logged:false,
        users:[
                {id:1 , name:"Ahmed", age:21 ,price:2000},
                {id:2 , name:"Khaled", age:20 ,price:5000},
                {id:3 , name:"Ali", age:28 ,price:7000},
        
        ],
        user:null
        }
        HandelRegister=(e)=>{
        this.setState({
            RegisterUser: e.target.value,
    
        })
        }
        HandelLogin=(e)=>{
            this.setState({
                LoginUser: e.target.value,
        
            })
            }
        HandelRegisterSubmit=(e)=>{
            e.preventDefault();
            localStorage.setItem("user",this.state.RegisterUser)
            this.setState({
                isRegister:true,
                Logged:false
            })
        }
        HandelLoginSubmit=(e)=>{
            e.preventDefault();
            let LoginUser =this.state.LoginUser;
            let SevedUser =localStorage.getItem("user");
            if (LoginUser == SevedUser) {
                this.setState({
                    Logged:true
                })
                
            }else{
                this.setState({
                    Logged:false
                })
            }
        }
        RenderRegisterForm=()=>{return(
            <UserRegister
            HandelRegisterSubmit={this.HandelRegisterSubmit}
            HandelRegister={this.HandelRegister}
            RegisterUser={this.state.RegisterUser}
            />
            

        )}
        RenderLoginForm=()=>{return(
            <UserLogin
            HandelLoginSubmit={this.HandelLoginSubmit}
            HandelLogin={this.HandelLogin}
            LoginUser={this.state.LoginUser}
            />
            
           
        )}
        HandelDeletaUser=(id)=>{
            // console.log(id);
            let users =this.state.users.filter(user=> user.id != id)
        this.setState({
            users:users
        })
        }
        HandelViewUser=(user)=>{
        this.setState({
            user:user,
        })

        }   

        RenderUserList=()=>{
            return(
                <List
                user={this.state.user}
                users={this.state.users}
                HandelViewUser={this.HandelViewUser}
                HandelDeletaUser={this.HandelDeletaUser}
            />
            
            
            )}
    render(){
        return(
            <div>
            {this.state.Logged ? (
            this.RenderUserList()
            ):this.state.isRegister ?(this.RenderLoginForm())
            :(this.RenderRegisterForm())}
            </div>
        )
    }
}
export default LoginListing;