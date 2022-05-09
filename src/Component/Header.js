import React, { Component ,Fragment } from "react";
import {BrowserRouter , Routes ,Route,NavLink} from "react-dom"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

class Header extends Component{
    render(){
        return(<BrowserRouter>
                <header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                        </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                </ul>
                {/* <LoginUsers/> */}
                {/* <RegisterUsers/> */}
                </header>
            <Fragment>
                <Routes>
                    <Route path="/"element={<Home/>} />
                    <Route path="/about"element={<About/>} />
                    <Route path="/contact"element={<Contact/>} />
                </Routes>
                {/* <Home/>
                <About/>
                <Contact/> */}
            </Fragment>
            </BrowserRouter>
        
            )}
}
export default Header;