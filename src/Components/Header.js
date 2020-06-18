import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Header = () => {
    return (
        <div className='navbar'>
          
            <Link to="/">Home |</Link>
            <Link to="/about-me">About Me</Link>


           <Switch>

           </Switch>
        </div>
    );
};

export default Header;