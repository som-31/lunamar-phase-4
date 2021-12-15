import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Employee from './Employee';
import Home from './Home';
import Login from './Login';
import ServicesInformation from './ServicesInformation';

function Header(){

    return (
        <Router>
        <div class="navbar">
        <div>
                    <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%" />

        </div>
        <nav>
            <ul id='MenuItems'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/services-information'>Services</Link></li>
                <li><Link to='contactus'>Contact Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/employee'>Employee</Link></li>
                <li><Link to={{ pathname: "http://sxd6629.uta.cloud/" }} target="_blank">Blog</Link></li>


            </ul>
        </nav>
        
    </div>
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/aboutus'><AboutUs /></Route>
        <Route exact path='/services-information'><ServicesInformation /></Route>
        <Route exact path='/contactus'><ContactUs /></Route>
        <Route exact path='/login'><Login /></Route>
        <Route exact path='/employee'><Employee /></Route>
    </Switch>
    </Router>
    );
}

export default Header;