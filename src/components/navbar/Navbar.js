import React from 'react'
import "./navbar.css"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    const {title}=props;
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <a className="navbar-brand" href="#">{title}</a>   
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contact/add"> Add Contact </Link>
                </li>
            </ul>
        </nav>
       
    )
}
Navbar.default = {
    title:"title"
}
Navbar.prototype = {
    title: PropTypes.string.isRequired
}

export default Navbar;