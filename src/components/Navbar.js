import React from 'react'
import '../App.css';
const Navbar = () => {
    return (
            <div className="flex p-4 space-x-24 back text-lg poppin">
                <div className="ml-10 flex-1 lg:text-3xl md:text-3xl sm:text-lg">
                    <a href="/" className="logo">Hermes</a>
                </div>
                <div className="flex-1">
                   <a href="/buy"> Buy</a>
                </div>
                <div className="flex-1">
                    <a href="/rent">Rent</a>
                </div>
                <div className="flex-1">
                    <a href='/login'>Login/Register</a>
                </div>
            </div>
    )
}

export default Navbar
