import React, { Component } from 'react';
import jwt_decode from "jwt-decode";
import '../App.css';

if(window.sessionStorage.getItem("token")){
    var token = jwt_decode(window.sessionStorage.getItem("token"))
  }
else{
    var token = {"Login":"False"}
}


class Navbar extends Component{
    state = { clicked: false }
    handleClick = () => {
        window.open("/")
        this.setState({ clicked: !this.state.clicked })
    }

    handleLogout = () => {    
        window.sessionStorage.removeItem("token")
        alert("You have successfully logged out");
        window.open("/","_self")
    }

    render(){
        if(token.login === "True"){
            return (
                <div className="flex p-4 space-x-24 back text-lg poppin">
                    <div className="ml-10 flex-1 lg:text-3xl md:text-3xl sm:text-lg">
                        <a href="/" className="logo">Hermes</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy">Model X</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy"> Model Y</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy"> Model Z</a>
                    </div>
                    <div className="flex-1">
                        <a href='/login' onClick={this.handleLogout}>Logout</a>
                    </div>
                </div>
            )
            
        }
        else{
            return (
                <div className="flex p-4 space-x-24 back text-lg poppin">
                    <div className="ml-10 flex-1 lg:text-3xl md:text-3xl sm:text-lg">
                        <a href="/" className="logo">Hermes</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy">Model X</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy"> Model Y</a>
                    </div>
                    <div className="flex-1">
                       <a href="/buy"> Model Z</a>
                    </div>
                    <div className="flex-1">
                        <a href='/login'>Login/Register</a>
                    </div>
                </div>
            )
        }
        
    }
    
}

export default Navbar
